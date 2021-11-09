function theLoveLetterMystery(string) {
  let i = 0;
  let j = s.length - 1;
  let result = 0;
  while (i < j) {
    if (s[i] !== s[j]) result += Math.abs(s.charCodeAt(i) - s.charCodeAt(j));
    i++;
    j--;
  }
  return result;
}

console.log(theLoveLetterMystery("abc")); //2
console.log(theLoveLetterMystery("abcba")); //0
console.log(theLoveLetterMystery("abcd")); //4
console.log(theLoveLetterMystery("cba")); //2
