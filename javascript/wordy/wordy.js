//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const filteredMathString = question.replace(/What is|by|[?]/g, '').split(' ')
    .filter((emptyStrings) => emptyStrings !== '');

  let result = parseInt(filteredMathString[0]);
  
  if(filteredMathString.length === 0) throw new Error('Syntax error');

  if(['multiplied','divided','minus','plus']
     .includes(filteredMathString[filteredMathString.length - 1])){
    throw new Error('Syntax error');
  }

  if(isNaN(parseInt(filteredMathString[filteredMathString.length - 1]))){
   throw new Error('Unknown operation');
  } 

  if(isNaN(parseInt(filteredMathString[0]))) throw new Error('Syntax error');

  filteredMathString.forEach((operation,index) => {
    if(parseInt(filteredMathString[index]) && parseInt(filteredMathString[index + 1])) {
      throw new Error('Syntax error')
    }

    if(isNaN(operation)) {
      
      let stringToNumberConvetor = parseInt(filteredMathString[index + 1])
      
      if(isNaN(filteredMathString[index + 1])) throw new Error('Syntax error');

      switch(operation) {
       case 'plus':
        result += stringToNumberConvetor;
       break
        case 'minus':
          result -= stringToNumberConvetor;
        break
        case 'multiplied':
          result *= stringToNumberConvetor;
        break;
        case 'divided':
          result /= stringToNumberConvetor;
        break;
      }
      
    }
  })
  return result;
};


