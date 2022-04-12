// ------------ SPREAD OPERATORS -------------

// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

const twoArraysInOne = (a: number[], b: number[]): number[] => {
  return [...a, ...b]
}

console.log(twoArraysInOne([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(twoArraysInOne([1, 2], [3, 4, 5, 6])) // [1, 2, 3, 4, 5, 6]

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const addStringToArray = (a: string[], b: string): string[] => {
  return [...a, b]
}

console.log(addStringToArray(["Apple", "Orange", "Banana"], "Kiwi")) // ['Apple', 'Orange', 'Banana', 'Kiwi']

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const addStringToArray2 = (a: string[], b: string): string[] => {
  return [b, ...a]
}

console.log(addStringToArray2(["Apple", "Orange", "Banana"], "Kiwi")) // ['Kiwi', 'Apple', 'Orange', 'Banana']

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

const twoObjectsInOne = (a: object, b: object): object => {
  return { ...a, ...b }
}

console.log(twoObjectsInOne({ a: 1, b: 2 }, { c: 3, d: 4 })) // { a:1, b:2, c:3, d:4 }
console.log(twoObjectsInOne({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 })) // { a:1, b:2, c:3, d:4, e:5, f:6 }

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const addNewProperty = (a: object, b: string) => {
  return { ...a, favoriteMovie: b }
}

console.log(addNewProperty({ eyeColor: "green", age: 10 }, "Garfield")) // { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(addNewProperty({ eyeColor: "blue", age: 15 }, "Twilight")) // { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }
