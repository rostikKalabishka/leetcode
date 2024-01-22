function backspaceCompare(s: string, t: string): boolean {
  return stackText(s) === stackText(t);
}

function stackText(str: string): string {
  const result = [];

  for (const ch of str) {
    if (ch !== "#") result.push(ch);
    else if (result.length > 0) result.pop();
  }

  return result.join("");
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));

// function backspaceCompare(s: string, t: string): boolean {

// };
