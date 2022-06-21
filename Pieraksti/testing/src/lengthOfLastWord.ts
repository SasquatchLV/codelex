// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (s: string): number => {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
};

export default lengthOfLastWord;
