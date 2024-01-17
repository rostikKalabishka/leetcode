function findDuplicates(nums: number[]): number[] {
  let resArr: number[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      resArr.push(nums[i]);
    }
  }
  return resArr;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
