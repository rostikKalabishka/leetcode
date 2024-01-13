function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();
  for (const [i, num] of nums.entries()) {
    const numInMap = numberMap.get(target - num);
    if (numInMap != null) {
      return [numInMap, i];
    } else {
      numberMap.set(num, i);
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
