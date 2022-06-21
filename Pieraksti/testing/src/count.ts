/* eslint-disable no-param-reassign */
type Counts = {
  [key: string]: number
}

const count = (str: string): Counts => str
  .trim()
  .toLowerCase()
  .split(/\s+/g)
  .reduce((countsResult, word) => {
    countsResult[word] = (countsResult[word] || 0) + 1;
    return countsResult;
  }, {} as Counts);

export default count;
