function climbStairs(n: number): number {
  if (n < 4) {
    return n;
  } else {
    return 2 * climbStairs(n - 2) + climbStairs(n - 3);
  }
}
