export class Cell {
  public isMarked = false;

  public isOpen = false;

  public value = 0;

  constructor(public row: number, public column: number) { }
}
