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
];

export type color = typeof resistorColors[number];

const resistorColorCode = (band: color) => resistorColors.indexOf(band);

const decodedValue = ([band1, band2]: string[]): number =>
  resistorColorCode(band1) * 10 + resistorColorCode(band2);

export function decodedResistorValue ([band1, band2, band3]: color[]): string {
  const value = decodedValue([band1,band2]) * 10 ** resistorColorCode(band3);
  if(value > 1000) return `${value / 1000} kiloohms`;
  return `${value} ohms`;
}