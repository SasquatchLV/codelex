// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/

const balancedStringSplit = (s: string): number => {
  let count = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'R') {
      balance += 1;
    } else {
      balance -= 1;
    }
    if (balance === 0) {
      count += 1;
    }
  }
  return count;
};

export default balancedStringSplit;
