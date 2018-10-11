import { Cell } from "./Cell";
import { Letter } from "./Letter";
import { Neighbor } from "./Neighbor";

export class Game {
  /** @private */
  get allNumbersOpen() {
    for (const cell of this.cells) {
      if (!cell.isOpen && cell.value > 0) {
        return false;
      }
    }
    return true;
  }

  /** @private */
  get cell() {
    return this.cells[this.index];
  }

  /** @private */
  get index() {
    return this.row * this.columns + this.column;
  }

  /** @private */
  get value() {
    const cell = this.cell;
    if (!cell.isOpen) {
      throw new Error("Cell is not open.");
    }
    return cell.value;
  }

  constructor() {
    /** @type {Cell[]} */
    this.cells = [];
    this.column = 0;
    this.columns = 10;
    this.isLost = false;
    this.isStarted = false;
    this.isWon = false;
    this.mineCount = 20;
    this.neighbor = new Neighbor(this);
    this.row = 0;
    this.rows = 10;

    for (var i = 0; i <= this.rows - 1; i++) {
      for (var j = 0; j <= this.columns - 1; j++) {
        this.cells.push(new Cell(i, j));
      }
    }
    this.reset();
  }

  /**
   * @param {number} row
   * @param {number} column
   */
  go(row, column) {
    this.column = column;
    this.row = row;
    return this.cell;
  }

  open() {
    if (
      this.row < 0 ||
      this.row >= this.rows ||
      this.column < 0 ||
      this.column >= this.columns
    ) {
      throw new Error("Coordinate is out of range.");
    }
    if (this.isLost || this.isWon) {
      throw new Error("Game is over.");
    }
    let cell = this.cell;
    if (cell.isOpen) {
      throw new Error("Cell is open.");
    }
    if (cell.isMarked) {
      throw new Error("Cell is marked as a mine.");
    }
    const row = cell.row;
    const column = cell.column;
    if (!this.isStarted) {
      this.placeMines(cell);
      this.isStarted = true;
    }
    if (cell.value === -1) {
      this.isLost = true;
      this.openField();
      return;
    }
    cell = this.go(row, column);
    cell.isOpen = true;
    if (cell.value === 0) {
      this.neighbor.open();
    }
    if (this.allNumbersOpen) {
      this.isWon = true;
      this.openField();
    }
  }

  reset() {
    this.isStarted = false;
    this.isLost = false;
    this.isWon = false;

    for (const cell of this.cells) {
      cell.value = 0;
      cell.isOpen = false;
      cell.isMarked = false;
    }
  }

  toString() {
    let cell = null;
    /** @type {string[]} */
    const s = [];

    this.columnLegend(s);
    s.push("\n");

    for (var i = 0; i <= this.rows - 1; i++) {
      s.push("\n");
      s.push(this.pad(Letter[i]));
      s.push(" ");

      for (var j = 0; j <= this.columns - 1; j++) {
        cell = this.go(i, j);

        if (cell.isMarked) {
          s.push(this.pad("!"));
        } else if (!cell.isOpen) {
          s.push(this.pad(""));
        } else if (cell.value === -1) {
          s.push(this.pad("*"));
        } else if (cell.value === 0) {
          s.push(this.pad("-"));
        } else {
          s.push(this.pad(cell.value.toString()));
        }
      }

      s.push(" ");
      s.push(this.pad(Letter[i]));
      s.push("  ");
    }

    s.push("\n\n");
    this.columnLegend(s);

    return s.join("");
  }

  /** @private @param {string[]} s */
  columnLegend(s) {
    s.push(this.pad(""));
    s.push(" ");
    for (var i = 0; i <= this.columns - 1; i++) {
      s.push(this.pad(Letter[i]));
    }
    s.push(" ");
    s.push(this.pad(""));
    s.push("  ");
  }

  /** @private */
  openField() {
    for (const cell of this.cells) {
      if (cell.value === -1) {
        cell.isMarked = true;
      } else {
        cell.isOpen = true;
      }
    }
  }

  /** @private @param {string} input */
  pad(input) {
    return ("   " + input).substring(input.length);
  }

  /** @private @param {Cell} firstOpen */
  placeMines(firstOpen) {
    for (var i = 0; i < this.mineCount; i++) {
      this.cells[i].value = -1;
    }
    this.shuffle();
    this.go(firstOpen.row, firstOpen.column);
    const index = this.index;
    let temp = 0;

    if (firstOpen.value === -1) {
      for (const cell of this.cells) {
        this.go(cell.row, cell.column);
        if (cell.value === -1 || this.index === index) {
          continue;
        }
        temp = firstOpen.value;
        firstOpen.value = cell.value;
        cell.value = temp;
      }
    }

    let count = 0;
    for (i = 0; i <= this.rows - 1 && count !== this.mineCount; i++) {
      for (var j = 0; j <= this.columns - 1 && count !== this.mineCount; j++) {
        if (this.go(i, j).value !== -1) {
          continue;
        }
        this.neighbor.forEach((row, column) => {
          const cell = this.go(row, column);
          if (cell.value >= 0) {
            cell.value++;
          }
        });
        count++;
      }
    }
  }

  /** @private */
  shuffle() {
    let k = 0;
    let temp = 0;
    let n = this.cells.length;
    while (n > 1) {
      k = Math.floor(Math.random() * n--);
      temp = this.cells[n].value;
      this.cells[n].value = this.cells[k].value;
      this.cells[k].value = temp;
    }
  }
}
