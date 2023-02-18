//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const arrOfNumbers = number.toString().split('').map(Number)

  const powerOf = arrOfNumbers.length

  const resultOfCalculation = arrOfNumbers
    .map(n => Math.pow(n, powerOf))
    .reduce((prev, curr) => curr + prev, 0)
    
  return resultOfCalculation === number
};
