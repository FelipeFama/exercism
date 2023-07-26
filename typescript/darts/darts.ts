
export function score(x: number, y: number): number {
  const radius = x ** 2 + y ** 2;
  return radius > 100 ? 0 : radius > 25 ? 1 : radius > 1 ? 5 : 10;
}
