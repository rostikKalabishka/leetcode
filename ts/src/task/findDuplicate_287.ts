function findDuplicate(nums: number[]): number {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
  return 0;
}

// Time Limit Exceeded
// function findDuplicate(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return nums[i];
//       }
//     }
//   }
//   return 0;
// }
console.log(findDuplicate([1, 3, 4, 2, 2]));
