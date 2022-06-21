// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/

const getConcatenation = (nums: number[]): number[] => nums.concat(nums)
  .concat(nums);

export default getConcatenation;
