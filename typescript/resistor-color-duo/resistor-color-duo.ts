const resistorColors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const resistorColorCode = (color: string): number => resistorColors.indexOf(color);

export const decodedValue = ([tens, ones]: string[]): number =>
  resistorColorCode(tens) * 10 + resistorColorCode(ones);