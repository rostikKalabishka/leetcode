export function findContentChildren(g: number[], s: number[]): number {
  let count: number = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (const cookie of s) {
    if (cookie >= g[count]) {
      count++;
    }
  }

  return count;
}
