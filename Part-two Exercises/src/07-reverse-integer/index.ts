/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

// return an integer that is the reverse ordering of numbers without zeros
function reverse(int: number): number {
    let reversedInt = int.toString().split('').reverse().join('')
    let result = parseInt(reversedInt)
    if (int < 0) {
        result = result * -1
    }
    return result
}

export { reverse }
