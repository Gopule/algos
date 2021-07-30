function longestPalindromicSubstring(str) {
  if (str.length === 1) return str;
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    for (let j = str.length - 1; j > i; j--) {
      let last = str[j];
      if (first === last) {
        let word = str.slice(i, j + 1);
        let reverse = word.split("").reverse().join("");
        if (word === reverse) {
          if (longest.length < word.length) longest = word;
        }
      }
    }
  }
  return longest;
}

console.log(longestPalindromicSubstring("abaxyzzyxf")); //'xyzzyx'
console.log(longestPalindromicSubstring("abaxyzazyxf")); //'xyzazyx'
