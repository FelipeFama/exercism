//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if(input.length == 0) return [];

  const matrixElement = Math.max(0,...input.map(s => s.length))

  let rows = []
  for(let i = 0; i < matrixElement; i++) {
    rows[i] = input.map(element => element.charAt(i) || ' ').join('');
  }
  rows[rows.length - 1] = rows[rows.length -1].trimEnd();
  return rows;
};
