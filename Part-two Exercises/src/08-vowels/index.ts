/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

// Write a function which returns number of vowels in given string.
function vowels(s: string): number {
    let vowels = s.match(/[aeiou]/gi)
    if (vowels === null) {
        return 0
    } else {
        return vowels.length
    }
}

export { vowels }
