/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    // The idea is to start with a boolean flag variable as true and switch it n times. If flag variable gets original value (which is true) back, then n is even. Else n is false.

    let isEven = true
    for (let i = 1; i <= n; i++) isEven = !isEven
    return isEven
}

export { isEven }
