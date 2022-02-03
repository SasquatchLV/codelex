export {}

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]) => {
  return Math.min(...array)
}

const max = (array: number[]) => {
  return Math.max(...array)
}

const min2 = (array: number[]) => {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}

const max2 = (array: number[]) => {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

console.log(min([1, 2, 3, 4, 5])) // Expected output: 1
console.log(min([9, -3, 6])) // Expected output: -3
console.log(max([1, 2, 3, 4, 5])) // Expected output: 5
console.log(max([9, -3, 6])) // Expected output: 9
console.log(min2([1, 2, 3, 4, 5])) // Expected output: 1
console.log(min2([9, -3, 6])) // Expected output: -3
console.log(max2([1, 2, 3, 4, 5])) // Expected output: 5
console.log(max2([9, -3, 6])) // Expected output: 9
