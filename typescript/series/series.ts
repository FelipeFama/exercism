export class Series {
  series: string;
  
  constructor(series: string) {
    this.series = series;
  }
  
  slices(sliceLength: number): number[][] {
    if(this.series.length == 0) throw new Error("series cannot be empty");
    if(sliceLength == 0) throw new Error("slice length cannot be zero");
    if(sliceLength < 0) throw new Error("slice length cannot be negative");
    if(this.series.length < sliceLength ) throw new Error("slice length cannot be greater than series length");
    let series: number[][] = [];
    for(let i = 0; i <= this.series.length - sliceLength; i++) {
      let slicing = this.series.slice(i, sliceLength + i);
      series.push(Array.from(slicing.split(''),Number));
    }
    return series;
  }
}
