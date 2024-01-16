function sumArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

console.log(sumArray([1, 2, 6, 1, 45]));
