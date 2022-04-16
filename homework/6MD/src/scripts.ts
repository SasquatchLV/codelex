// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (a: number, b: number): number => a + b

console.log(add(1, 2)) // 3
console.log(add(1, 10)) // 11
console.log(add(99, 1)) // 100

// Task 2
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

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const areEquals = (a: any, b: any): boolean => {
  return a === b
}

console.log(areEquals(2, 3)) // false
console.log(areEquals(3, 3)) // true
console.log(areEquals(1, "1")) // false
console.log(areEquals("10", "10")) // true

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const nthCharacter = (a: string, n: number): string => {
  return a[n - 1]
}
console.log(nthCharacter("abcd", 1)) // a
console.log(nthCharacter("zyxbwpl", 5)) // w
console.log(nthCharacter("gfedcba", 3)) // e

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThree = (a: string): string => {
  return a.slice(3)
}

console.log(removeFirstThree("abcdefg")) // defg
console.log(removeFirstThree("1234")) // 4
console.log(removeFirstThree("fgedcba")) // dcba

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const extractLastThree = (a: string): string => {
  return a.slice(-3)
}

console.log(extractLastThree("abcdefg")) // efg
console.log(extractLastThree("1234")) // 234
console.log(extractLastThree("fgedcba")) // cba

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThree = (a: string): string => {
  return a.slice(0, 3)
}

console.log(firstThree("abcdefg")) // abc
console.log(firstThree("1234")) // 123
console.log(firstThree("fgedcba")) // fge

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalf = (a: string): string => {
  return a.slice(0, a.length / 2)
}

console.log(firstHalf("abcdefgh")) // abcd
console.log(firstHalf("1234")) // 12
console.log(firstHalf("gedcba")) // ged

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (a: string): string => {
  return a.slice(0, -3)
}

console.log(removeLastThree("abcdefg")) // abcd
console.log(removeLastThree("1234")) // 1
console.log(removeLastThree("fgedcba")) // fged

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentOf = (a: number, b: number): number => {
  return (a * b) / 100
}

console.log(percentOf(100, 50)) // 50
console.log(percentOf(10, 1)) // 0.1
console.log(percentOf(500, 25)) // 125

// Task 11
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

// Task 12
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

// Task 13
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

// Task 14
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

// Task 15
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

// Task 16
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

// Task 17
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

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array

const splitNumber = (a: number): number[] => {
  return a.toString().split("").map(Number)
}

console.log(splitNumber(10)) // [1,0]
console.log(splitNumber(931)) // [9,3,1]
console.log(splitNumber(193278)) // [1,9,3,2,7,8]

// Task 19
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

// Task 20
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

// Task 21
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

// Task 22
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

// Task 23
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

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthElement = (a: number[], n: number): number => {
  return a[n - 1]
}

console.log(nthElement([1, 2, 3, 4, 5], 3)) // 3
console.log(nthElement([10, 9, 8, 7, 6], 5)) // 6
console.log(nthElement([7, 2, 1, 6, 3], 1)) // 7

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeArr = (a: string[] | number[]): string[] | number[] => {
  return a.slice(3)
}

console.log(removeFirstThreeArr([1, 2, 3, 4])) // 4
console.log(removeFirstThreeArr([5, 4, 3, 2, 1, 0])) // 2 1 0
console.log(removeFirstThreeArr([99, 1, 1])) // []

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const removeLastThreeArr = (a: string[] | number[]): string[] | number[] => {
  return a.slice(-3)
}

console.log(removeLastThreeArr([1, 2, 3, 4])) // 2, 3, 4
console.log(removeLastThreeArr([5, 4, 3, 2, 1, 0])) // 2 1 0
console.log(removeLastThreeArr([99, 1, 1])) // 99, 1, 1

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFirstThreeArr = (a: string[] | number[]): string[] | number[] => {
  return a.slice(0, 3)
}

console.log(extractFirstThreeArr([1, 2, 3, 4])) // 1, 2, 3
console.log(extractFirstThreeArr([5, 4, 3, 2, 1, 0])) // 5 4 3
console.log(extractFirstThreeArr([99, 1, 1])) // 99, 1, 1

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastN = (a: string[] | number[], n: number): string[] | number[] => {
  return a.slice(-n)
}

console.log(lastN([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
console.log(lastN([1, 2, 3], 6)) // [ 1, 2, 3 ]
console.log(lastN([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]

// Tak 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanAfromB = (a: any[], b: any): any[] => {
  return a.filter((el) => el !== b)
}

console.log(cleanAfromB([1, 2, 3], 2)) // [1, 3]
console.log(cleanAfromB([1, 2, "2"], "2")) // [1, 2]
console.log(cleanAfromB([false, "2", 1], false)) // ['2', 1]
console.log(cleanAfromB([1, 2, "2", 1], 1)) // [2, '2']

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const countElements = (a: any[]): number => {
  return a.length
}

console.log(countElements([1, 2, 2, 4])) // 4
console.log(countElements([9, 9, 9])) // 3
console.log(countElements([4, 3, 2, 1, 0])) // 5

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const countNegative = (a: number[]): number => {
  return a.filter((el) => el < 0).length
}

console.log(countNegative([1, -2, 2, -4])) // 2
console.log(countNegative([0, 9, 1])) // 0
console.log(countNegative([4, -3, 2, 1, 0])) // 1

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const descendingSort = (a: number[]): number[] => {
  return a.sort((a, b) => b - a)
}

console.log(descendingSort([1, 3, 2])) // [3,2,1]
console.log(descendingSort([4, 2, 3, 1])) // [4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortAlphabetically = (a: string[]): string[] => {
  return a.sort()
}

console.log(sortAlphabetically(["b", "c", "d", "a"])) // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(["z", "c", "d", "a", "y", "a", "w"])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const average = (a: number[]): number => {
  return a.reduce((acc, curr) => acc + curr, 0) / a.length
}

console.log(average([10, 100, 40])) // 50
console.log(average([10, 100, 1000])) // 370
console.log(average([-50, 0, 50, 200])) // 50

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (a: string[]): string => {
  return a.sort((a, b) => b.length - a.length)[0]
}

console.log(longestString(["help", "me"])) // 'help'
console.log(longestString(["I", "need", "candy"])) // 'candy'

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allEqual = (a: any[]): boolean => {
  return a.every((el) => el === a[0])
}

console.log(allEqual([true, true, true, true])) // true
console.log(allEqual(["test", "test", "test"])) // true
console.log(allEqual([1, 1, 1, 2])) // false
console.log(allEqual(["10", 10, 10, 10])) // fase

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const mergeArrays = (...a: any[]): any[] => {
  return a.reduce((acc, curr) => acc.concat(curr), [])
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b", "c"], [4, 5, 6])) // ['a', 'b', 'c', 4, 5, 6]
console.log(mergeArrays([true, true], [1, 2], ["a", "b"])) // [true, true, 1, 2, 'a', 'b']

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

interface ISomeInterface {
  a: number
  b: number
}

const sortByB = (a: ISomeInterface[]): ISomeInterface[] => {
  return a.sort((a, b) => a.b - b.b)
}

console.log(
  sortByB([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
) // [{a:1,b:2},{a:5,b:4}]
console.log(
  sortByB([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
) // [{a:5,b:4},{a:2,b:10}]
console.log(
  sortByB([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
) // [{a:2,b:1},{a:1,b:7}]

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeAndSort = (a: any[], b: any[]): any[] => {
  return [...new Set([...a, ...b].sort((a, b) => a - b))]
}

console.log(mergeAndSort([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(mergeAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumUp = (a: number[], b: number): number => {
  return a.reduce((acc, curr) => (curr > b ? acc + curr : acc), 0)
}

console.log(sumUp([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(sumUp([-10, -11, -3, 1, -4], -3)) // 1
console.log(sumUp([78, 99, 100, 101, 401], 99)) // 602

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minAndMax = (min: number, max: number): number[] => {
  return Array.from({ length: max - min + 1 }, (v, i) => min + i)
  // return Array.from({ length: max - min + 1 }).map((v, i) => min + i)
}

console.log(minAndMax(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minAndMax(1, 3)) // [1, 2, 3]
console.log(minAndMax(-5, 5)) // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(minAndMax(2, 7)) // [2, 3, 4, 5, 6, 7]

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupByFirstLetter = (a: any[]): { [key: string]: string[] } => {
  return a.reduce((acc, curr) => {
    const firstLetter = curr[0].toLowerCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(curr)
    return acc
  }, {})
}

console.log(groupByFirstLetter(["Alf", "Alice", "Ben"])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupByFirstLetter(["Ant", "Bear", "Bird"])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupByFirstLetter(["Berlin", "Paris", "Prague"])) // { b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const someNewArray = (
  a: (string | number | boolean)[],
  n: number
): (string | number | boolean)[] => {
  const firstElement = n < 6 ? 0 : n
  let newArray = [firstElement, ...a]
  return newArray
}

console.log(someNewArray([1, 2, 3], 6)) // [6,1,2,3]
console.log(someNewArray(["a", "b"], 2)) // [0,'a','b']
console.log(someNewArray([null, false], 11)) // [11,null,false]

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const saveEveryNth = (a: number[], n: number): number[] => {
  return a.filter((e, i) => i % n === n - 1)
}

console.log(saveEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) // [3,6,9]
console.log(saveEveryNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)) // [6,1]
console.log(saveEveryNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)) // [2,6,4,8,10]

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getCountry = (o: { country: string; continent: string }): string => {
  return o.country
}

console.log(getCountry({ continent: "Asia", country: "Japan" }))
console.log(getCountry({ country: "Sweden", continent: "Europe" }))

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const getProp2 = (o: { [key: string]: string | number }) => {
  return o["prop-2"]
}

console.log(getProp2({ one: 1, "prop-2": 2 })) // 2
console.log(getProp2({ "prop-2": "two", prop: "test" })) // 'two'

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const getProp = (o: { [key: string]: string }, s: string): string => {
  return o[s]
}

console.log(getProp({ continent: "Asia", country: "Japan" }, "continent")) // 'Asia'
console.log(getProp({ country: "Sweden", continent: "Europe" }, "country")) // 'Sweden'

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const hasProp = (o: { [key: string]: string | number }, s: string): boolean => {
  return o.hasOwnProperty(s)
}

console.log(hasProp({ a: 1, b: 2, c: 3 }, "b")) // true
console.log(hasProp({ x: "a", y: "b", z: "c" }, "a")) // false
console.log(hasProp({ x: "a", y: "b", z: "c" }, "z")) // true

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createObject = (a: string): { [key: string]: string } => {
  return { key: a }
}

console.log(createObject("a")) // {key:'a'}
console.log(createObject("z")) // {key:'z'}
console.log(createObject("b")) // {key:'b'}

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const createObject2 = (a: string, b: string): { [key: string]: string } => {
  return { [a]: b }
}

console.log(createObject2("a", "b")) // {a:'b'}
console.log(createObject2("z", "x")) // {z:'x'}
console.log(createObject2("b", "w")) // {b:'w'}
console.log(createObject2("Country", "Philly")) // {Country: 'Philly'}

// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const createObject3 = (
  a: any[],
  b: any[]
): { [key: string | number]: string | number } => {
  return a.reduce((acc, curr, i) => {
    acc[curr] = b[i]
    return acc
  }, {})
}

console.log(createObject3(["a", "b", "c"], [1, 2, 3])) // {a:1,b:2,c:3}
console.log(createObject3(["w", "x", "y", "z"], [10, 9, 5, 2])) // {w:10,x:9,y:5,z:2}
console.log(createObject3([1, "b"], ["a", 2])) // {1:'a',b:2}

// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const getObjectKeys = (o: { [key: string]: string | number }): string[] => {
  return Object.keys(o)
}

console.log(getObjectKeys({ a: 1, b: 2, c: 3 })) // ['a','b','c']
console.log(getObjectKeys({ j: 9, i: 2, x: 3, z: 4 })) // ['j','i','x','z']
console.log(getObjectKeys({ w: 15, x: 22, y: 13 })) // ['w','x','y']

// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumOfAllObjects = (o: { [key: string]: number }): number | number[] => {
  return Object.values(o).reduce((acc, curr) => acc + curr, 0)
}

console.log(sumOfAllObjects({ a: 1, b: 2, c: 3 })) // 6
console.log(sumOfAllObjects({ j: 9, i: 2, x: 3, z: 4 })) // 18
console.log(sumOfAllObjects({ w: 15, x: 22, y: 13 })) // 50

// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const removeProp = (o: {
  [key: string]: string | number
}): { [key: string]: string | number } => {
  return Object.fromEntries(Object.entries(o).filter(([key]) => key !== "b"))
}

console.log(removeProp({ a: 1, b: 7, c: 3 })) // { a: 1, c: 3 }
console.log(removeProp({ b: 0, a: 7, d: 8 })) // { a: 7, d: 8 }
console.log(removeProp({ e: 6, f: 4, b: 5, a: 3 })) // { e: 6, f: 4, a: 3 }

// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeObjects = (
  o1: { [key: string]: string | number },
  o2: { [key: string]: string | number }
): { [key: string]: string | number } => {
  o2.d = o2.b
  delete o2.b
  let newObject = Object.assign({}, o1, o2)
  return newObject
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 5, b: 4, c: 3, e: 2, d: 1}

// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObject = (
  o: { [key: string]: number },
  b: number
): {
  [key: string]: number
} => {
  return Object.fromEntries(
    Object.entries(o).map(([key, value]) => [key, value * b])
  )
}

console.log(multiplyObject({ a: 1, b: 2, c: 3 }, 3)) // {a:3,b:6,c:9}
console.log(multiplyObject({ j: 9, i: 2, x: 3, z: 4 }, 10)) // {j:90,i:20,x:30,z:40}
console.log(multiplyObject({ w: 15, x: 22, y: 13 }, 6)) // {w:90,x:132,y:78}

// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapKeysAndValues = (o: {
  [key: string]: string | number
}): { [key: string]: string | number } => {
  return Object.fromEntries(
    Object.entries(o).map(([key, value]) => [value, key])
  )
}

console.log(swapKeysAndValues({ z: "a", y: "b", x: "c", w: "d" })) // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeysAndValues({ 2: "a", 4: "b", 6: "c", 8: "d" })) // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeysAndValues({ a: 1, z: 24 })) // {1:'a',24:'z'}

// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const removeEmptyStrings = (o: {
  [key: string]: any
}): { [key: string]: string | number } => {
  return Object.fromEntries(
    Object.entries(o).map(([key, value]) => {
      if (value.trim() === "") {
        return [key, null]
      } else {
        return [key, value]
      }
    })
  )
}

console.log(removeEmptyStrings({ a: "a", b: "b", c: "" })) // { a: 'a', b: 'b', c: null }
console.log(removeEmptyStrings({ a: "", b: "b", c: " ", d: "d" })) // { a: null, b: 'b', c: null, d: 'd' }
console.log(removeEmptyStrings({ a: "a", b: "b ", c: " ", d: "" })) // { a: 'a', b: 'b ', c: null, d: null }

// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const extractPersonalInfo = (o: {
  [key: string]: any
}): { [key: string]: string } => {
  let newObject = Object.fromEntries(
    Object.entries(o).filter(
      ([key]) =>
        key === "fn" || key === "ln" || key === "size" || key === "weight"
    )
  )
  if (newObject.size) {
    newObject.size = newObject.size.toString()
    newObject.size = newObject.size + "cm"
  }
  if (newObject.weight) {
    newObject.weight = newObject.weight.toString()
    newObject.weight = newObject.weight + "kg"
  }
  return newObject
}

console.log(
  extractPersonalInfo({
    fn: "Lisa",
    ln: "Müller",
    age: 17,
    size: 175,
    weight: 67,
  })
) // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(
  extractPersonalInfo({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
) // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(
  extractPersonalInfo({
    fn: "Andrew",
    ln: "Harper",
    age: 81,
    size: 175,
    weight: 71,
  })
) // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(
  extractPersonalInfo({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
) // {fn: 'Matthew', ln: 'Müller'}

// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// Write a function that takes an array of objects as arguments

const addContinentToObjects = (o: Object[], s: string): Object[] => {
  return o.map((obj) => {
    return { ...obj, continent: s }
  })
}

console.log(
  addContinentToObjects(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
) // [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

console.log(
  addContinentToObjects(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
) // [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const convertArrayToObject = (a: any[]): { [key: number]: number } => {
  return a.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
}

console.log(convertArrayToObject([1, 2, 2, 3])) // {1:1,2:2,3:1}
console.log(convertArrayToObject([9, 9, 9, 99])) // {9:3,99:1}
console.log(convertArrayToObject([4, 3, 2, 1])) // {1:1,2:1,3:1,4:1}

// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const areDatesEqual = (d1: Date, d2: Date): boolean => {
  return d1.getTime() === d2.getTime()
}

console.log(
  areDatesEqual(
    new Date("2000/01/01 08:00:00"),
    new Date("2000/01/01 08:45:00")
  )
) // false
console.log(
  areDatesEqual(
    new Date("2000/01/01 08:00:00"),
    new Date("2000/01/01 08:00:00")
  )
) // true
console.log(
  areDatesEqual(
    new Date("2001/01/01 08:00:00"),
    new Date("2000/01/01 08:00:00")
  )
) // false

// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const getDaysBetweenDates = (d1: Date, d2: Date): number => {
  return Math.abs(d1.getTime() - d2.getTime()) / (1000 * 3600 * 24)
}

console.log(getDaysBetweenDates(new Date("2020-06-11"), new Date("2020-06-01"))) // 10
console.log(getDaysBetweenDates(new Date("2000-01-01"), new Date("2020-06-01"))) // 7457

// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const areDatesOnSameDay = (d1: Date, d2: Date): boolean => {
  return d1.getDay() === d2.getDay()
}

console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/01"))) // true
console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/02"))) // false
console.log(areDatesOnSameDay(new Date("2001/01/01"), new Date("2000/01/01"))) // false
console.log(areDatesOnSameDay(new Date("2000/11/01"), new Date("2000/01/01"))) // false
