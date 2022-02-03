export {}

function add(n1: number, n2: number): number {
  return n1 + n2
}

function subtract(n1: number, n2: number): number {
  return n1 - n2
}

function sum(arr: number[]): number {
  // let sum = 1
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i]
  // }
  // return sum

  return arr.reduce((accumulator, curr) => accumulator + curr)
}

function multiply(arr: number[]): number {
  // let sum = 1
  // for (let i = 0; i < arr.length; i++) {
  //   sum *= arr[i]
  // }
  // return sum

  return arr.reduce((accumulator, curr) => accumulator * curr)
}

function power(n1: number, n2: number) {
  return Math.pow(n1, n2)
}

console.log(add(1, 2)) // Expected output: 3
console.log(subtract(1, 2)) // Expected output: -1
console.log(sum([1, 2, 3])) // Expected output: 6
console.log(multiply([1, 2, 3])) // Expected output: 6
console.log(power(2, 3)) // Expected output: 8
