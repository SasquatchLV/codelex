/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

// For given string return a new string with the reversed order of characters.
function reverse(str: string): string {
    return str.split('').reverse().join('')
}

export { reverse }
