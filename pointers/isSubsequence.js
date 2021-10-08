var isSubsequence = function (str, test) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < str.length && p2 < test.length) {
    if (str[p1] === test[p2]) {
      p1++;
      p2++;
    } else p2++;
  }
  if (p1 < str.length) return false;
  else return true;
};

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
