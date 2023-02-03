//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const romanNumerals = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

export const toRoman = (number) => {
  if(number === 0) {
    return "";
  }

  const [value, numeral] = romanNumerals.find(([value]) => value <= number);
  return numeral + toRoman(number - value);
};
