/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const pizzaPrices ={
   "Margherita": 7,
   "Caprese": 9,
   "Formaggio": 10,
   "ExtraSauce": 1,
   "ExtraToppings": 2,
  }
  let cost = 0
  cost = pizzaPrices[pizza]
  extras.forEach((item) => {
    if(typeof pizzaPrices[item] !== "undefined") {
      cost += pizzaPrices[item]
    } 
  })
  return cost
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let cost = 0;
  pizzaOrders.forEach((item) => {
    cost += pizzaPrice(item['pizza'],...item['extras'])
  })
  return cost;
}
