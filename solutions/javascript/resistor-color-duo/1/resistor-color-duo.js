//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  
  const resistors = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
  ];

  const colorOne = array[0];
  const colorTwo = array[1];

  const decodedOne = resistors.indexOf(colorOne).toString();
  const decodedTwo = resistors.indexOf(colorTwo).toString();

  const value = decodedOne+decodedTwo;
  
  return Number(value);
};
