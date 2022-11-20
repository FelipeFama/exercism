
export class Gigasecond {
  time: Date;
  
  constructor(time: Date) {
    this.time = time;
  }
  public date(): Date {
    return new Date(this.time.getTime() + 1000000000000);
  }
}
