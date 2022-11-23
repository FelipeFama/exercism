//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldSystem) => {
  let newSystem = {};
  for(let scores in oldSystem) {
    oldSystem[scores].forEach(charWord => newSystem[charWord.toLowerCase()] = +scores);
  }
  return newSystem;
};