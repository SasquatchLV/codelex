export {}

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
function convertToUSD(price: number): number {
  var convertedPrice = parseFloat((price * 1.1297).toFixed(1))
  return parseFloat(convertedPrice + (convertedPrice * 0.1).toFixed(2))
}
// You are allowed to change this function
function convertToBRL(price: number): number {
  var convertedPrice = parseFloat((price * 5.95266).toFixed(1))
  return parseFloat(convertedPrice + (convertedPrice * 0.1).toFixed(2))
}

const product = "You don't know JS"
const price = 12.5
const priceInUSD = convertToUSD(price)
const priceInBRL = convertToBRL(price)

console.log("Product: " + product)
console.log("Price: $" + priceInUSD)
console.log("Price: R$" + priceInBRL)

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
