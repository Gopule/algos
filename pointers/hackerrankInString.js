function hackerrankInString(string) {
  const hr = "hackerrank";
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === hr[j]) j++;
  }
  if (j === hr.length) return "YES";
  else return "NO";
}

console.log(hackerrankInString("hereiamstackerrank")); //'YES'
console.log(hackerrankInString("hackerworld")); //'NO'
