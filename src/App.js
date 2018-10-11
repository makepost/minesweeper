import { Component } from "inferno";
import "./App.css";
import { Field } from "./Field";

export class App extends Component {
  render() {
    return (
      <main>
        <h1>
          <a href="https://github.com/makepost/minesweeper">Minesweeper</a>
        </h1>

        <Field />
        <hr />
        <small>
          &copy; 2016-2018 <a href="https://github.com/makepost">makepost</a>
        </small>
      </main>
    );
  }
}
