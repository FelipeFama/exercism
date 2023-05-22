//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  let result = [];
  for(let i = 0; i < n; i++) {
    let row = [];
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i -1][j])
      }
    }
   result.push(row);
  }
  return result;
};
