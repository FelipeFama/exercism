//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  const stringSplit = str.split("")
  const stringReverse = stringSplit.reverse()
  const stringJoin = stringReverse.join("")
  return stringJoin
};
