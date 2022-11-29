//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor( hours, minutes = 0) {
    this.minutes = minutes + (hours * 60);
  }

  getHours() {
    let hours = Math.floor(this.minutes / 60);
    return ('0' + ((hours % 24 + 24) % 24 )).slice(-2);
  }

  getMinutes() {
    return ('0' + ((this.minutes % 60 + 60) % 60)).slice(-2);
  }
  
  toString() {
    return `${this.getHours()}:${this.getMinutes()}`
  }
  

  plus(minutes) {
    this.minutes += minutes;
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    return this;
  }

  equals(clock) {
    return this.toString() == clock.toString();
  }
}