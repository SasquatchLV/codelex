export {}

function truncateString(inputString: string, lenght: number): string {
  return inputString.slice(0, lenght)
}

console.log(truncateString("CODELEX", 4)) // Expected output: CODE
