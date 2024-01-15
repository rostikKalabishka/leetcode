// export function containsDuplicate(nums: number[]): boolean {
//   let set = new Set<number>();
//   nums.forEach(function (n) {
//     if (set.has(n)) {
//       return true;
//     }
//     set.add(n);
//   });
//   return false;
// }

export function containsDuplicate(nums: number[]): boolean {
  let set = new Set<number>(nums);
  return set.size != nums.length ? true : false;
}
