export const square = (n: number) => {
  if(n < 1 || n > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return BigInt(2 ** (n - 1));
}

export const total = () => {
  let sum: bigint = BigInt(0);
  for (let i = 1; i <= 64; i++) {
    sum += square(i);
  }
  return sum;
}
