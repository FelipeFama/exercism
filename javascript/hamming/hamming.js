//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (firstDna, secondDna) => {
  if(firstDna.length !== secondDna.length) {
    throw new Error('strands must be of equal length')
  }
  return firstDna.split("")
    .filter((el, i) => el != secondDna[i]).length
};
