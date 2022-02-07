export {}

function concatenate(w1: string, w2: string): string {
  return w1.concat(" ").concat(w2)
}

const result = concatenate("hello", "world") // concatenate two strings - 'hello', 'world', using the function above
console.log(result) // Expected output: "hello world"
