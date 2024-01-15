export function twoSum(nums: Array<number>, target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
