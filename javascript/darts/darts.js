//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const radius = x ** 2 + y ** 2;
  return radius > 100 ? 0 : radius > 25 ? 1 : radius > 1 ? 5 : 10; 
};
