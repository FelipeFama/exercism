export class Matrix {
  public text: string;
  constructor(text: string) {
    this.text = text;
  }

  get rows(): number[][] {
    return this.text
      .split('\n')
      .map(nums => nums.split(' ').map(row => +row))
  }

  get columns(): number[][] {
    return this.rows.map((firstIteration,index) => 
      this.rows.map(secondIteration => secondIteration[index]))
  }
}
