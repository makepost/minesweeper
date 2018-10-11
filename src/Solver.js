import { Game } from "./Game";

export class Solver {
  /** @param {Game} game */
  constructor(game) {
    this.game = game;
  }

  solve() {
    const game = this.game;
    game.go(
      Math.floor(Math.random() * game.rows),
      Math.floor(Math.random() * game.columns)
    );
    game.open();

    let modified = true;
    const neighbor = game.neighbor;

    while (!game.isWon && !game.isLost) {
      modified = false;

      clear: for (var row = 0; row < game.rows; row++) {
        for (var column = 0; column < game.columns; column++) {
          const cell = game.go(row, column);
          if (cell.isMarked || !cell.isOpen) {
            continue;
          }
          if (cell.value === 0) {
            continue;
          }
          if (neighbor.clear === 0) {
            continue;
          }
          if (neighbor.clear === cell.value - neighbor.marked) {
            neighbor.markClear();
            modified = true;
            break clear;
          }
          if (neighbor.marked === cell.value) {
            neighbor.openFirstClear();
            modified = true;
            break clear;
          }
        }
      }

      if (!game.isWon && !game.isLost && !modified) {
        next: for (row = 0; row < game.rows; row++) {
          for (column = 0; column < game.columns; column++) {
            const cell = game.go(row, column);
            if (cell.isOpen || cell.isMarked || Math.random() > 0.5) {
              continue;
            }
            game.open();
            break next;
          }
        }
      }
    }

    return game.isWon;
  }
}
