function fib(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(0));
