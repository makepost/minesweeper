import { Component } from '@angular/core';
import { alphabet } from 'app/constants';
import { Solver } from 'app/solver';
import { Game } from 'domain/Game';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.css'],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  public coords = '';

  public game = new Game();

  public output = '';

  public warning = '';

  constructor() {

    while (true) {
      const solver = new Solver(this.game);

      if (solver.solve()) {
        break;
      }

      this.reset();
    }
  }

  private go() {
    if (this.coords === 'reset') {
      this.reset();
      return;
    }

    if (!/^[a-z]{2}$/.test(this.coords)) {
      return;
    }

    try {
      this.game.openCell(alphabet.indexOf(this.coords[0]), alphabet.indexOf(this.coords[1]));
    } catch (error) {
      console.error(error);
      this.say(error.message);
      return;
    }

    this.coords = '';
  }

  private reset() {
    this.game.reset();
    this.coords = '';
  }

  private say(message: string) {
    this.warning = message;

    setTimeout(() => {
      this.warning = '';
    }, 3000);
  }
}
