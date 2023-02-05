export function isArmstrongNumber(number: number): boolean {
  const arrOfNumbers = number.toString()
    .split('')
    .map(Number)
  
  const powerOf = arrOfNumbers.length
  
  const resultOfCalculation = arrOfNumbers
    .map(n => Math.pow(n, powerOf))
    .reduce((prev, curr) => curr + prev, 0)

  return resultOfCalculation === number
}
