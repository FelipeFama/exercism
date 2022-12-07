//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
  return string.split(/[^a-zA-Z']/)
    .map(phrase => phrase[0] && phrase[0].toUpperCase())
    .join('')
};