//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(numbers) {
    this.numbers = numbers;
  }

  get sumOfSquares() {
    return this.numbers * (this.numbers + 1) * (2 * this.numbers + 1)/6
  }

  get squareOfSum() {
    return Math.pow((this.numbers * (this.numbers + 1)/2),2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares 
  }
}
