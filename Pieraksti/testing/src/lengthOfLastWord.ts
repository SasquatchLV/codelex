// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (s: string): number => s.replace(
  /[^\w\d\s]/g, '',
).trim().split(' ')
  .pop()?.length ?? 0;

export default lengthOfLastWord;
