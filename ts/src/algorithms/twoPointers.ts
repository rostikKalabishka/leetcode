// only in sorted array
export function twoSum(nums: Array<number>, target: number) {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left < right) {
    let curSum: number = nums[left] + nums[right];
    if (target === curSum) {
      return [left, right];
    } else if (target > curSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
