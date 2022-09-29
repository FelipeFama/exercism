//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  const listOfWords = sentence.toLowerCase().match(/\w+'\w|\w+/g)
  let obj = {}
  for(let index = 0; index < listOfWords.length; index++){
    const word = listOfWords[index]
    if(obj[word]) {
      obj[word] = obj[word] + 1;
    } else {
      obj[word] = 1;
    }
  }
  return obj;
};
