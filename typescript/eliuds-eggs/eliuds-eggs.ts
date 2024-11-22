//
// This is only a SKELETON file for the 'Pop Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue: number) => {
  let result = 0;
  while (displayValue > 0) {
    result += (displayValue & 1);
    displayValue >>= 1;
  }

  return result;
}
