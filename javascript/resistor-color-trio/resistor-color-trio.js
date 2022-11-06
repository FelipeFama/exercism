//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export class ResistorColorTrio {
  constructor(arr) {
    arr.forEach(color => {
      if (COLORS.indexOf(color) === -1) throw (/invalid color/);
    })
    this.power = Math.pow(10, COLORS.indexOf(arr.pop()))
    this.ohms = arr.map(color => COLORS.indexOf(color)).join("");
    this.unit = "ohms"
    this.kiloUnit = "kiloohms"
  }

  get label() {
    let ohmVal, unit;
    if (this.ohms * this.power >= 1000) {
      ohmVal = (this.ohms * this.power) / 1000
      unit = this.kiloUnit
    } else {
      ohmVal = this.ohms * this.power
      unit = this.unit;
    }
    return `Resistor value: ${ohmVal} ${unit}`;
  }
}