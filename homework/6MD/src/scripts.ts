// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (a: number, b: number): number => a + b

console.log(add(1, 2)) // 3
console.log(add(1, 10)) // 11
console.log(add(99, 1)) // 100

// Write a function that takes a value as argument
// Return the type of the value

const getType = (value: any): string => {
  return typeof value
}

console.log(getType(1)) // number
console.log(getType(false)) // boolean
console.log(getType({})) // object
console.log(getType(null)) // object
console.log(getType("string")) // string
console.log(getType(["array"])) // object

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const areEquals = (a: any, b: any): boolean => {
  return a === b
}

console.log(areEquals(2, 3)) // false
console.log(areEquals(3, 3)) // true
console.log(areEquals(1, "1")) // false
console.log(areEquals("10", "10")) // true

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const nthCharacter = (a: string, n: number): string => {
  return a[n - 1]
}
console.log(nthCharacter("abcd", 1)) // a
console.log(nthCharacter("zyxbwpl", 5)) // w
console.log(nthCharacter("gfedcba", 3)) // e

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThree = (a: string): string => {
  return a.slice(3)
}

console.log(removeFirstThree("abcdefg")) // defg
console.log(removeFirstThree("1234")) // 4
console.log(removeFirstThree("fgedcba")) // dcba

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const extractLastThree = (a: string): string => {
  return a.slice(-3)
}

console.log(extractLastThree("abcdefg")) // efg
console.log(extractLastThree("1234")) // 234
console.log(extractLastThree("fgedcba")) // cba

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThree = (a: string): string => {
  return a.slice(0, 3)
}

console.log(firstThree("abcdefg")) // abc
console.log(firstThree("1234")) // 123
console.log(firstThree("fgedcba")) // fge

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalf = (a: string): string => {
  return a.slice(0, a.length / 2)
}

console.log(firstHalf("abcdefgh")) // abcd
console.log(firstHalf("1234")) // 12
console.log(firstHalf("gedcba")) // ged

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (a: string): string => {
  return a.slice(0, -3)
}

console.log(removeLastThree("abcdefg")) // abcd
console.log(removeLastThree("1234")) // 1
console.log(removeLastThree("fgedcba")) // fged

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentOf = (a: number, b: number): number => {
  return (a * b) / 100
}

console.log(percentOf(100, 50)) // 50
console.log(percentOf(10, 1)) // 0.1
console.log(percentOf(500, 25)) // 125

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result

const calculate = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => {
  return Math.pow(((a + b - c) * d) / e, f)
}

console.log(calculate(6, 5, 4, 3, 2, 1)) // 10.5
console.log(calculate(6, 2, 1, 4, 2, 3)) // 2744
console.log(calculate(2, 3, 6, 4, 2, 3)) // -8

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (number: number): boolean => {
  return number % 2 === 0
}

console.log(isEven(10)) // true
console.log(isEven(-4)) // true
console.log(isEven(5)) // false
console.log(isEven(-111)) // false

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const numberOfTimes = (a: string, b: string): number => {
  return b.split(a).length - 1
}

console.log(
  numberOfTimes(
    "m",
    "how many times does the character occur in this sentence?"
  )
) // 2
console.log(
  numberOfTimes(
    "h",
    "how many times does the character occur in this sentence?"
  )
) // 4
console.log(
  numberOfTimes(
    "?",
    "how many times does the character occur in this sentence?"
  )
) // 1
console.log(
  numberOfTimes(
    "z",
    "how many times does the character occur in this sentence?"
  )
) // 0

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWholeNumber = (number: number): boolean => {
  return number % 1 === 0
}

console.log(isWholeNumber(4)) // true
console.log(isWholeNumber(1.123)) // false
console.log(isWholeNumber(1048)) // true
console.log(isWholeNumber(10.48)) // false

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const calculateTwo = (a: number, b: number): number => {
  return a < b ? a / b : a * b
}

console.log(calculateTwo(10, 100)) // 0.1
console.log(calculateTwo(90, 45)) // 4050
console.log(calculateTwo(8, 20)) // 0.4
console.log(calculateTwo(2, 0.5)) // 1

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatenate = (a: string, b: string): string => {
  return a.includes(b) ? b + a : a + b
}

console.log(concatenate("cheese", "cake")) // cheesecake
console.log(concatenate("lips", "s")) // slips
console.log(concatenate("Java", "script")) // Javascript
console.log(concatenate(" think, therefore I am", "I")) // I think, therefore I am

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundTwoDigit = (a: number): number => {
  return Math.round(a * 100) / 100
}

console.log(roundTwoDigit(2.12397)) // 2.12
console.log(roundTwoDigit(3.136)) // 3.14
console.log(roundTwoDigit(1.12397)) // 1.12
console.log(roundTwoDigit(26.1379)) // 26.14

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array

const splitNumber = (a: number): number[] => {
  return a.toString().split("").map(Number)
}

console.log(splitNumber(10)) // [1,0]
console.log(splitNumber(931)) // [9,3,1]
console.log(splitNumber(193278)) // [1,9,3,2,7,8]

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const replaceAndReverse = (a: string, b: string): string => {
  let cleanStringA = a.replace(/[^a-zA-Z]/g, "")
  let cleanStringB = b
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reverse()
    .join("")

  return cleanStringA[0].toUpperCase() + cleanStringA.slice(1) + cleanStringB
}

console.log(replaceAndReverse("java", "tpi%rcs"))
console.log(replaceAndReverse("c%ountry", "edis"))
console.log(replaceAndReverse("down", "nw%ot"))

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isAPrime = (a: number): number => {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return isAPrime(a + 1)
    }
  }
  return a
}

console.log(isAPrime(38)) // 41
console.log(isAPrime(7)) // 7
console.log(isAPrime(115)) // 127
console.log(isAPrime(2000)) // 2003

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (x: number, y: number): number => {
  return x % y === 0 ? x : isDivisible(x + 1, y)
}

console.log(isDivisible(1, 23)) // 23
console.log(isDivisible(23, 23)) // 23
console.log(isDivisible(7, 3)) // 9
console.log(isDivisible(-5, 7)) // 0

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const uselessString = (a: string, b: string): string => {
  const uselessArr = a.split("")
  for (let i = uselessArr.length - 3; i >= 0; i -= 3) {
    uselessArr.splice(i, 0, b)
  }
  return uselessArr.join("")
}

console.log(uselessString("1234567", ".")) // '1.234.567'
console.log(uselessString("abcde", "$")) // 'ab$cde'
console.log(uselessString("zxyzxyzxyzxyzxyz", "w")) // 'zwxyzwxyzwxyzwxyzwxyz'

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const nextToCharacter = (a: string): string => {
  let newString = ""
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "z") {
      newString += "a"
    } else {
      newString += String.fromCharCode(a.charCodeAt(i) + 1)
    }
  }
  return newString
}

console.log(nextToCharacter("bnchmf")) // coding
console.log(nextToCharacter("bgddrd")) // cheese
console.log(nextToCharacter("sdrshmf")) // testing

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthElement = (a: number[], n: number): number => {
  return a[n - 1]
}

console.log(nthElement([1, 2, 3, 4, 5], 3)) // 3
console.log(nthElement([10, 9, 8, 7, 6], 5)) // 6
console.log(nthElement([7, 2, 1, 6, 3], 1)) // 7

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeArr = (a: string[] | number[]): string[] | number[] => {
  return a.slice(3)
}

console.log(removeFirstThreeArr([1, 2, 3, 4])) // 4
console.log(removeFirstThreeArr([5, 4, 3, 2, 1, 0])) // 2 1 0
console.log(removeFirstThreeArr([99, 1, 1])) // []


