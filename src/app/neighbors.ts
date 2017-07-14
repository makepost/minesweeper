import { Game } from 'domain/Game';

export class Neighbors {
  constructor(
    private game: Game,
    private row = -1,
    private column = -1,
  ) { }

  public of(row: number, column: number) {
    this.row = row;
    this.column = column;
    return this;
  }

  public forEach(callback: (row: number, column: number) => false | void) {
    let i = 0;
    let j = 0;

    for (i = this.row - 1; i <= this.row + 1; i++) {
      for (j = this.column - 1; j <= this.column + 1; j++) {
        if (i < 0 || i >= this.game.rows) {
          continue;
        }

        if (j < 0 || j >= this.game.columns) {
          continue;
        }

        if (this.row === i && this.column === j) {
          continue;
        }

        if (callback(i, j) === false) {
          return;
        }
      }
    }
  }

  public markClear() {
    this.forEach((row, column) => {
      if (this.isClear(row, column)) {
        this.game.mark(row, column);
      }
    });
  }

  public openFirstClear() {
    this.forEach((row, column) => {
      if (!this.isClear(row, column)) {
        return;
      }

      this.game.openCell(row, column);
      return false;
    });
  }

  public get clear() {
    let count = 0;

    this.forEach((row, column) => {
      if (this.isClear(row, column)) {
        count++;
      }
    });

    return count;
  }

  public get marked() {
    let count = 0;

    this.forEach((row, column) => {
      if (this.game.isMarked(row, column)) {
        count++;
      }
    });

    return count;
  }

  public get nonOpen() {
    let count = 0;

    this.forEach((row, column) => {
      if (this.isNonOpen(row, column)) {
        count++;
      }
    });

    return count;
  }

  private isClear(row: number, column: number) {
    return !this.game.isOpen(row, column) && !this.game.isMarked(row, column);
  }

  private isNonOpen(row: number, column: number) {
    return !this.game.isOpen(row, column);
  }
}
