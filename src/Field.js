import { Component } from "inferno";
import { decorate, observable, observer } from "refstore";
import { Game } from "./Game";
import { Letter } from "./Letter";
import { Solver } from "./Solver";

class FieldView extends Component {
  constructor() {
    super();

    /** @type {typeof Field.prototype.handleChange} */
    this.handleChange = this.handleChange.bind(this);

    /** @type {typeof Field.prototype.open} */
    this.open = this.open.bind(this);

    this.coords = "";
    this.game = new Game();
    this.warning = "";

    while (!new Solver(this.game).solve()) {
      this.reset();
    }
  }

  render() {
    return (
      <form onsubmit={this.open}>
        <pre>{this.game.toString()}</pre>

        <input
          autoComplete="off"
          autoFocus={true}
          name="coords"
          oninput={this.handleChange}
          onpaste={this.handleChange}
          placeholder={`Coords ("cd") or "reset"`}
          value={this.coords}
        />

        {this.game.isWon && <p>You win.</p>}

        {this.game.isLost && <p>Game over.</p>}

        {this.warning && <p>{this.warning}</p>}
      </form>
    );
  }

  /** @param {{ currentTarget: { value: string } }} ev */
  handleChange(ev) {
    this.coords = ev.currentTarget.value.toLowerCase();
  }

  /** @private */
  open() {
    if (this.coords === "reset") {
      this.reset();
      return false;
    }

    if (!/^[a-z]{2}$/.test(this.coords)) {
      return false;
    }

    try {
      this.game.go(
        Letter.indexOf(this.coords[0]),
        Letter.indexOf(this.coords[1])
      );
      this.game.open();
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
      this.say(error.message);
      return false;
    }

    this.coords = "";
    return false;
  }

  /** @private */
  reset() {
    this.game.reset();
    this.coords = "";
  }

  /** @private @param {string} message */
  say(message) {
    this.warning = message;
    setTimeout(() => (this.warning = ""), 3000);
  }
}

decorate(FieldView, { coords: observable.ref, warning: observable.ref });

export const Field = observer(FieldView);
