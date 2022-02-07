export {}

function concatenate(
  firstWord: string,
  secondWord: string,
  thirdWord: string
): string {
  // function to concatenate three words together with space between them
  return firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord)
}

const result: string = concatenate("Hello", "from", "CODELEX")
console.log(result) // Expected output: "Hello from CODELEX"
