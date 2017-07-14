import { alphabet } from 'app/constants';
import { Neighbors } from 'app/neighbors';
import { Cell } from 'domain/Cell';

export class Game {
  private cells = [] as Cell[];

  public readonly columns = 10;

  private didLose = false;

  public get isLost() {
    return this.didLose;
  }

  private isStarted = false;

  private didWin = false;

  public get isWon() {
    return this.didWin;
  }

  private mineCount = 20;

  public readonly rows = 10;

  constructor() {
    let i = 0;
    let j = 0;

    for (i = 0; i <= this.rows - 1; i++) {
      for (j = 0; j <= this.columns - 1; j++) {
        this.cells.push(new Cell(i, j));
      }
    }

    this.reset();
  }

  public reset() {
    this.isStarted = false;
    this.didLose = false;
    this.didWin = false;

    for (const cell of this.cells) {
      cell.value = 0;
      cell.isOpen = false;
      cell.isMarked = false;
    }
  }

  public openCell(row: number, column: number) {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error('Coordinate is out of range.');
    }

    if (this.didLose || this.didWin) {
      throw new Error('Game is over.');
    }

    const cell = this.getCell(row, column);

    if (cell.isOpen) {
      throw new Error('Cell is open.');
    }

    if (cell.isMarked) {
      throw new Error('Cell is marked as a mine.');
    }

    if (!this.isStarted) {
      this.placeMines(cell);
      this.isStarted = true;
    }

    if (cell.value === -1) {
      this.didLose = true;
      this.openField();
      return;
    }

    cell.isOpen = true;

    if (cell.value === 0) {
      this.openNeighbors(row, column);
    }

    if (this.allNumbersOpen()) {
      this.didWin = true;
      this.openField();
    }
  }

  public toString() {
    let i = 0;
    let j = 0;

    let cell = null;
    const s = [] as string[];

    this.columnLegend(s);
    s.push('\n');

    for (i = 0; i <= this.rows - 1; i++) {
      s.push('\n');
      s.push(this.pad(alphabet[i]));
      s.push(' ');

      for (j = 0; j <= this.columns - 1; j++) {
        cell = this.cells[this.toIndex(i, j)];

        if (cell.isMarked) {
          s.push(this.pad('!'));
        } else if (!cell.isOpen) {
          s.push(this.pad(''));
        } else if (cell.value === -1) {
          s.push(this.pad('*'));
        } else if (cell.value === 0) {
          s.push(this.pad('-'));
        } else {
          s.push(this.pad(cell.value.toString()));
        }
      }

      s.push(' ');
      s.push(this.pad(alphabet[i]));
      s.push('  ');
    }

    s.push('\n\n');
    this.columnLegend(s);

    return s.join('');
  }

  public isMarked(row: number, column: number) {
    const cell = this.getCell(row, column);
    return cell.isMarked;
  }

  public isOpen(row: number, column: number) {
    const cell = this.getCell(row, column);
    return cell.isOpen;
  }

  public getValue(row: number, column: number) {
    const cell = this.getCell(row, column);

    if (!cell.isOpen) {
      throw new Error('Cell is not open.');
    }

    return cell.value;
  }

  public mark(row: number, column: number) {
    const cell = this.getCell(row, column);
    cell.isMarked = true;
  }

  private pad(input: string) {
    return ('   ' + input).substring(input.length);
  }

  private columnLegend(s: string[]) {
    s.push(this.pad(''));
    s.push(' ');

    for (let i = 0; i <= this.columns - 1; i++) {
      s.push(this.pad(alphabet[i]));
    }

    s.push(' ');
    s.push(this.pad(''));
    s.push('  ');
  }

  private openField() {
    for (const cell of this.cells) {
      if (cell.value === -1) {
        cell.isMarked = true;
      } else {
        cell.isOpen = true;
      }
    }
  }

  private allNumbersOpen() {
    let result = true;

    for (const cell of this.cells) {
      if (!cell.isOpen && cell.value > 0) {
        result = false;
        break;
      }
    }

    return result;
  }

  private openNeighbors(row: number, column: number) {
    new Neighbors(this, row, column).forEach((i, j) => {
      const cell = this.cells[this.toIndex(i, j)];

      if (cell.isOpen) {
        return;
      }

      if (cell.value >= 0) {
        cell.isOpen = true;
      }

      if (cell.value === 0) {
        this.openNeighbors(cell.row, cell.column);
      }
    });
  }

  private placeMines(firstOpen: Cell) {
    let i = 0;
    let j = 0;

    for (i = 0; i < this.mineCount; i++) {
      this.cells[i].value = -1;
    }

    this.shuffle();

    const index = this.toIndex(firstOpen.row, firstOpen.column);
    let temp = 0;

    if (firstOpen.value === -1) {
      for (const cell of this.cells) {
        if (cell.value === -1 || this.toIndex(cell.row, cell.column) === index) {
          continue;
        }

        temp = firstOpen.value;
        firstOpen.value = cell.value;
        cell.value = temp;
      }
    }

    let count = 0;
    const neighbors = new Neighbors(this);

    for (i = 0; i <= this.rows - 1; i++) {
      for (j = 0; j <= this.columns - 1; j++) {
        if (count === this.mineCount) {
          return;
        }

        if (this.cells[this.toIndex(i, j)].value !== -1) {
          continue;
        }

        neighbors.of(i, j).forEach((row, column) => {
          const cell = this.getCell(row, column);

          if (cell.value >= 0) {
            cell.value++;
          }
        });

        count++;
      }
    }
  }

  private toIndex(row: number, column: number) {
    return row * this.columns + column;
  }

  private shuffle() {
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

  private getCell(row: number, column: number) {
    return this.cells[this.toIndex(row, column)];
  }
}
