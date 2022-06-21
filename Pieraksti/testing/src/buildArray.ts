// 1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/

const buildArray = (nums: number[]): number[] => nums.map(
  (num, i) => nums[nums[i]],
);

export default buildArray;
