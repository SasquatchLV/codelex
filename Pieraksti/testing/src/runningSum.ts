// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

export default {};

const runningSum = (nums: number[]): number[] => {
  const prevElems = [];
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    prevElems.push(nums[i]);
    result.push((nums[i] + prevElems.reduce((a, b) => a + b, 0) - nums[i]));
  }
  return result;
};
