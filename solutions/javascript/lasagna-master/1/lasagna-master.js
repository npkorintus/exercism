/// <reference path="./global.d.ts" />
// @ts-check


/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine whether the lasagna is done
 *
 * @param {number} remainingTime
 *
 * @returns {string} status of lasagna based on remaining time on timer
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0)
    return 'Lasagna is done.';
  else if (remainingTime > 0)
    return 'Not done, please wait.';
  else
    return 'You forgot to set the timer.'
}

/**
 * Estimate the preparation time
 *
 * @param {string[]} layers
 * @param {number} avgPrepTime
 *
 * @returns {number} estimated total prep time
 */
export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} layers
 *
 * @returns {Record<string, number|null>} quantity of noodles and sauce needed
 */
export function quantities(layers) {
  let ingredients = {
    noodles: 0,
    sauce: 0
  }

  layers.forEach(key => {
    if (key === 'noodles')
      ingredients.noodles += 50;
    if (key === 'sauce')
      ingredients.sauce += 0.2;
  })

  return ingredients;
}

/**
 * Add the secret ingredient
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 *
 * @returns nothing
 */
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

/**
 * Scale the recipe
 *
 * @param {Record<string, number>} recipe holds the amounts needed for 2 portions
 * @param {number} portions
 *
 * @returns {Record<string, number>} recipe adjusted for number of portions desired
 */
export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {...recipe};
  const multiplier = portions / 2;

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] *= multiplier;
  }

  return scaledRecipe;
}
