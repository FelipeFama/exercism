//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const isPaired = (str) => {
  const pairs = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  return str.replace(/[^\(\)|\{\}|\[\]]/g, "").split("").reduce((char, currChar) => {
    if(char.length === 0) {
      return char.concat(currChar);
    }
    if(pairs[currChar] === char[char.length - 1]) {
      return char.slice(0, -1)
    }
    return char.concat(currChar)
  }, []).length === 0;
};
