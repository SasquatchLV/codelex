// eslint-disable-next-line max-len
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

export const mostWordsFound = (sentence: string[]): number => {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < sentence.length; i += 1) {
    temp = sentence[i].split(' ').length;
    if (temp > max) {
      max = temp;
    }
  }

  return max;
};
