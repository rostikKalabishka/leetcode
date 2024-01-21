//two pointers
export function isPalindrome(s: string): boolean {
  const formatted = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .map((char) => char.toLowerCase());

  let left: number = 0;
  let right: number = formatted.length - 1;
  while (left < right) {
    if (formatted[left] != formatted[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
