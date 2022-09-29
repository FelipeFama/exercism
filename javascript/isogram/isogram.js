//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const isIsogram = phrase => {
  const letters = phrase.toLowerCase().replace(/[^a-z]/g, '')
  return letters.length === new Set(letters).size;
};
