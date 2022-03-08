/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    // const distinct = Array.from(new Set(array))
    const unique = [...new Set(array)]
    const uniqueSorted = unique.sort((a, b) => a - b)
    return uniqueSorted[uniqueSorted.length - 2]
}

export { secondLargest }
