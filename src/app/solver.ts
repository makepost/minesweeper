import { Neighbors } from 'app/neighbors';
import { Game } from 'domain/Game';

export class Solver {
  constructor(private game: Game) { }

  public solve() {
    this.game.openCell(
      Math.floor(Math.random() * this.game.rows),
      Math.floor(Math.random() * this.game.columns),
    );

    let modified = true;
    const neighbors = new Neighbors(this.game);

    while (!this.game.isWon && !this.game.isLost) {
      modified = false;

      (() => {
        for (let row = 0; row < this.game.rows; row++) {
          for (let column = 0; column < this.game.columns; column++) {
            if (
              this.game.isMarked(row, column) ||
              !this.game.isOpen(row, column)
            ) {
              continue;
            }

            const value = this.game.getValue(row, column);

            if (value === 0) {
              continue;
            }

            neighbors.of(row, column);

            if (neighbors.clear === 0) {
              continue;
            }

            if (neighbors.clear === value - neighbors.marked) {
              neighbors.markClear();
              modified = true;
              return;
            }

            if (neighbors.marked === value) {
              neighbors.openFirstClear();
              modified = true;
              return;
            }
          }
        }
      })();

      if (!this.game.isWon && !this.game.isLost && !modified) {
        (() => {
          for (let row = 0; row < this.game.rows; row++) {
            for (let column = 0; column < this.game.columns; column++) {
              if (
                this.game.isOpen(row, column) ||
                this.game.isMarked(row, column) ||
                Math.random() > 0.5
              ) {
                continue;
              }

              this.game.openCell(row, column);
              return;
            }
          }
        })();
      }
    }

    return this.game.isWon;
  }
}
