// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = (nums: number[]): number[] => {
  const prevElems = [];
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    prevElems.push(nums[i]);
    result.push((nums[i] + prevElems.reduce((a, b) => a + b, 0) - nums[i]));
  }
  return result;
};

export default runningSum;
