function twoSum(nums: Array<number>, target: number): Array<number> {
  let result: Array<number> = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        result.push(i, j);
      }
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
