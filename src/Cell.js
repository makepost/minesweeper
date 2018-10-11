export class Cell {
  /** @private */
  get isClear() {
    return !this.isOpen && !this.isMarked;
  }

  /**
   * @param {number} row
   * @param {number} column
   */
  constructor(row, column) {
    this.column = column;
    this.isMarked = false;
    this.isOpen = false;
    this.row = row;
    this.value = 0;
  }
}
