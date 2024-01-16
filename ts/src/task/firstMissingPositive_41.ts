function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
}
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
