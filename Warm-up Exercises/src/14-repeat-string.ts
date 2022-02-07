export {}

const repeatString = (inputString: string, numberOfTimes: number) => {
  // let outputString = ""
  // for (let i = 0; i < numberOfTimes; i++) {
  //   outputString = outputString.concat(inputString)
  // }
  // return outputString

  return inputString.repeat(numberOfTimes)
}

console.log(repeatString("a", 4)) // Expected output: 'aaaa'
console.log(repeatString("b", 5)) // Expected output: 'bbbbb'
