export function decodedValue(array: string[]): number {
  return Number(COLORS.indexOf(array[0]) + "" + COLORS.indexOf(array[1]));
}

const COLORS: string[] = [
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
