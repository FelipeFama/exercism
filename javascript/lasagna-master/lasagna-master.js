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

export function cookingStatus(timer) {
  return timer === 0 ? 'Lasagna is done.' 
  : timer ? 'Not done, please wait.'
  :'You forgot to set the timer.';
}

export function preparationTime(layers, minutes = 2) {
  return layers.length * minutes;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach(item => item === 'noodles' ? noodles += 50
    : item === 'sauce' ? sauce += 0.2 : '')
  return {noodles, sauce}
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, numbersPortions = 0 ) {
  const obj = {}
  Object.keys(recipe).forEach(key => obj[key] = recipe[key] * numbersPortions / 2);
  return obj
}