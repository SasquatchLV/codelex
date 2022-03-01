export {}

const count = (str: string, char: string) => {
  let count = 0
  let loverCase = str.toLowerCase()
  let splitString = loverCase.split(" ")
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === char) {
      count++
    }
  }
  return count
}

console.log(count("The quick brown fox jumps over the lazy dog", "the")) // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")) // Expected output: 1
