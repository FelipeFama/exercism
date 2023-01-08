export const classify = (num: number) => {
  let aliquotSum = 0;
  for(let index = 0; index < num; index++) {
    if(num % index == 0) {
      aliquotSum += index
    }
  }
  if(num <= 0) {
    throw new Error("Classification is only possible for natural numbers.")
  }
  return (aliquotSum == num) ? "perfect"
    : (aliquotSum > num) ?
    "abundant" : "deficient";
}
