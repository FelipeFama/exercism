//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (str, num) => {
  str = [...str];
  let startAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  for(let i = 0; i < num; i++) {
    newAlphabet.push(...newAlphabet.shift());
  }
  
  for(let i = 0; i < str.length; i++) {
    if(/[a-z]/.test(str[i])) {
      str[i] = newAlphabet[startAlphabet.indexOf(str[i])];
    } else if(/[A-Z]/.test(str[i])) {
      str[i] = newAlphabet[startAlphabet.indexOf(str[i].toLowerCase())].toUpperCase();
    }
  }
  return str.join('');
};