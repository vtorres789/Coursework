const coffeeMenu = require("./coffee_data");

// Print an array of all the drinks on the menu.

const printDrinks = (drink) => {
    return drink.name;
}
console.log(coffeeMenu.map(printDrinks));

// Print an array of drinks that cost 5 and under.
const underFive = (drink) => {
    return drink.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.table(drinksUnderFive);

// Print an array of drinks that are priced at an even number..
const evens = coffeeMenu.filter((price) => price % 2 === 0);

console.table(evens);

// Print the total if you were to order one of every drink.
const findPriceArray = (item) => {
    return item.price;
}
const priceArray = coffeeMenu.map(findPriceArray);
console.log(priceArray);

const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice);

// Print an array with all the drinks that are seasonal.
const isSeasonal = (seasonal) => {
    return seasonal.condition === true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.table(seasonalItems);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const justName = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(justName) + " with imported beans");