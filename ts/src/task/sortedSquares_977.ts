function sortedSquares(nums: number[]): number[] {
  nums = nums.map((e) => e * e).sort((a, b) => a - b);
  return nums;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
