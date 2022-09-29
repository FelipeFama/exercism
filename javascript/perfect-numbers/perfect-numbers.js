//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const classify = (number) => {
  let aliquotSum = 0;
  for(let index = 1; index < number; index++) {
    if(number % index == 0){
      aliquotSum += index;
    }
  }
  
  if(number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  
  return (aliquotSum == number) ? "perfect" 
    : (aliquotSum > number) ?
    "abundant" : "deficient";
};