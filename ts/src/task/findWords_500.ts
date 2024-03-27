function findWords(words: string[]): string[] {
  let ss = [];

  for (let s of words) {
    let ns = [...new Set(s.toLowerCase())];
    let isIn1 = ns.map((e) => "qwertyuiop".includes(e)).every((e) => e);
    let isIn2 = ns.map((e) => "asdfghjkl".includes(e)).every((e) => e);
    let isIn3 = ns.map((e) => "zxcvbnm".includes(e)).every((e) => e);
    if (isIn1 || isIn2 || isIn3) {
      ss.push(s);
    }
  }
  return ss;
}
