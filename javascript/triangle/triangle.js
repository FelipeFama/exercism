//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides
  }

  get isEquilateral() {
    if(this.sides[0] === 0 || this.sides[1] === 0 || this.sides[0] === 0) {
      return false;
    }
    if(this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return true;
    } else {
      return false;
    }
    return true
  }

  get isIsosceles() {
    if(this.sides[0] === 0 || this.sides[1] === 0 || this.sides[0] === 0) { 
      return false; 
    }
    if(this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]) {
      if(this.sides[0] + this.sides[1] >= this.sides[2] && this.sides[0] + this.sides[2] >= this.sides[1] && this.sides[1] + this.sides[2] >= this.sides[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
 }

  get isScalene() {
    if(this.sides[0] === 0 || this.sides[1] === 0 || this.sides[0] === 0) { 
      return false; 
    }
    if(this.sides[0] !== this.sides[1] && this.sides[0] !== this.sides[2] && this.sides[1] !== this.sides[2]) {
      if(this.sides[0] + this.sides[1] >= this.sides[2] && this.sides[0] + this.sides[2] >= this.sides[1] && this.sides[1] + this.sides[2] >= this.sides[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
