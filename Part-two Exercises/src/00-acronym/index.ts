/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  // const words = input.replace("_", "").split(/[ -]/g)
  // let acronym = ""
  // words.forEach((word) => {
  //   const firstChar = word.charAt(0).toUpperCase()
  //   acronym += firstChar
  // })
  // return acronym

  const words = input.replace("_", "").split(/[ -]/g)
  return words.map((word) => word.charAt(0).toUpperCase()).join("")
}

export { parse }
