export const compute = (left: string, right: string): number => {
  if(left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.")
  }
    return left
      .split("")
      .reduce((acc, _, i) => acc + (left[i] !== right[i] ? 1 : 0), 0);
};
