import { Game } from "./Game";

export class Neighbor {
  get clear() {
    let count = 0;
    this.forEach((row, column) => {
      if (this.game.go(row, column).isClear) {
        count++;
      }
    });
    return count;
  }

  get marked() {
    let count = 0;
    this.forEach((row, column) => {
      if (this.game.go(row, column).isMarked) {
        count++;
      }
    });
    return count;
  }

  /** @param {Game} game */
  constructor(game) {
    this.game = game;
  }

  /** @param {(row: number, column: number) => false | void} callback */
  forEach(callback) {
    const row = this.game.row;
    const column = this.game.column;
    each: for (var i = row - 1; i <= row + 1; i++) {
      for (var j = column - 1; j <= column + 1; j++) {
        if (i < 0 || i >= this.game.rows) {
          continue;
        }
        if (j < 0 || j >= this.game.columns) {
          continue;
        }
        if (row === i && column === j) {
          continue;
        }
        if (callback(i, j) === false) {
          break each;
        }
      }
    }
    this.game.go(row, column);
  }

  markClear() {
    this.forEach((row, column) => {
      const cell = this.game.go(row, column);
      if (cell.isClear) {
        cell.isMarked = true;
      }
    });
  }

  open() {
    this.forEach((i, j) => {
      const cell = this.game.go(i, j);
      if (cell.isOpen) {
        return;
      }
      if (cell.value >= 0) {
        cell.isOpen = true;
      }
      if (cell.value === 0) {
        this.open();
      }
    });
  }

  openFirstClear() {
    this.forEach((row, column) => {
      if (!this.game.go(row, column).isClear) {
        return;
      }
      this.game.open();
      return false;
    });
  }
}
