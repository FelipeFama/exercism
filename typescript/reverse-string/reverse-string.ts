export function reverse(str: string) {
  const stringSplit = str.split("");
  const stringReverse = stringSplit.reverse();
  const stringJoin = stringReverse.join("");
  return stringJoin;
}
