/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

interface Counts {
  [key: string]: number
}

class Words {
  count(str: string) {
    const result: Counts = {}
    const words = str.split(" ")
    words.forEach((word) => {
      let count = result[word]
      if (count) {
        result[word] = count++
      } else {
        result[word] = 1
      }
    })

    return result
  }
}

export { Words }
