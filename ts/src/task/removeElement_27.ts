//two pointers
export function removeElement(nums: number[], val: number): number {
  let startP = 0;
  let endP = nums.length - 1;
  let k = nums.length;
  while (startP <= endP) {
    if (nums[startP] === val) {
      if (nums[endP] === val) {
        endP--;
        k--;
        continue;
      } else {
        nums[startP] = nums[endP];
        nums[endP] = -1;
        endP--;
        k--;
      }
    }
    startP++;
  }
  return k;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
