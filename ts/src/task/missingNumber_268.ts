export function missingNumber(nums: number[]): number {
  let resultValue: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      resultValue = i;
    }
  }
  return resultValue;
}
