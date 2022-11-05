//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if(n <= 0) {
    throw new Error("Only positive numbers are allowed")
  }
  let numberOfSteps = 0
  let result = n
  while(result !== 1) {
    if(result % 2 === 0) {
      result = result / 2
    } else {
      result = result * 3 + 1
    }
    numberOfSteps ++
  }
  return numberOfSteps;
};
