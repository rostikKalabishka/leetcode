// export function findDisappearedNumbers(nums: number[]): number[] {
//   let arr: number[] = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

export function findDisappearedNumbers(nums: number[]): number[] {
  let set = new Set<number>(nums);
  let arr: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      arr.push(i);
    }
  }
  return arr;
}
