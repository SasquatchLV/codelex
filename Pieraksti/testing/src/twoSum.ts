const twoSum = (nums: number[], target: number): number[] => {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  const map: number[] = [];
  for (let i = 0; i < len; i += 1) {
    const n = target - nums[i];
    const find = map[n];
    if (find !== undefined) return [find, i];
    map[nums[i]] = i;
  }
  return [];
};

export default twoSum;
