// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;

  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }

  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) return 0;

  let count = 0;

  while (wedgesNeeded > 0 && limes.length > 0) {
    let size = limes[0];

    switch (size) {
      case 'small':
        wedgesNeeded = wedgesNeeded - 6;
        count++;
        break;
      case 'medium':
        wedgesNeeded = wedgesNeeded - 8;
        count++;
        break;
      case 'large':
        wedgesNeeded = wedgesNeeded - 10;
        count++;
        break;
      default:
        //do nothing
    }

    limes.shift();
  }

  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    let timeSpent = timeToMixJuice(orders[0]);
    timeLeft = timeLeft - timeSpent;
    orders.shift();
  }

  return orders;
}
