// Знайдіть найбільший індекс k, для якого a[k] < a[k + 1].
// Якщо такого індексу не існує, то перестановка є останньою перестановкою.
// Знайдіть найбільший індекс l, більший за k, для якого a[k] < a[l].
// Поміняти місцями значення a[k] та a[l].
// Оберніть послідовність від a[k + 1] до останнього елемента a[n] включно.

export function nextPermutation(nums: number[]): void {
  let k = -1;
  let l = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      k = i;
    }
  }
  console.log(k);
  if (k === -1) {
    nums.sort((a, b) => b - a);
  }
  for (let i = k + 1; i < nums.length; i++) {
    if (nums[k] < nums[i]) {
      l = i;
    }
  }
  [nums[k], nums[l]] = [nums[l], nums[k]];
  let arr2 = nums.slice(k + 1).reverse();
  nums.splice(k + 1, arr2.length, ...arr2);
}
