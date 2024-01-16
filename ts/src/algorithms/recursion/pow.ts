function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return x * myPow(x, n - 1);
}

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
