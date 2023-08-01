export class Triangle {
  public rows: number[][]
  public lastRow: number[]

  constructor(n: number) {
    this.rows = []
    
    for(let i = 0; i < n; i++) {
      let newRow = [];
      for(let j = 0; j <= i; j++) {
        if(j === 0) newRow.push(1)
        else if(j === i) newRow.push(1)
        else {
          newRow.push(this.rows[i - 1][j - 1] + this.rows[i - 1][j])
        }
      }
      this.rows.push(newRow)
    }
    this.lastRow = this.rows[n -1]
  }
}