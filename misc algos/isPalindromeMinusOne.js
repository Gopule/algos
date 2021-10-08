var validPalindrome = function (str) {
  let count = 1;
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end] && count === 1) {
      let startPlus = str.slice(start + 1, end + 1);
      let endMinus = str.slice(start, end);
      let startReverse = startPlus.split("").reverse().join("");
      let endReverse = endMinus.split("").reverse().join("");
      if (startPlus === startReverse) start++;
      else if (endMinus === endReverse) end--;
      else return false;
      count--;
    } else if (str[start] !== str[end] && count === 0) return false;
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome("aba")); //true
console.log(validPalindrome("abca")); //true
console.log(validPalindrome("abc")); //false
console.log(
  validPalindrome(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
); //true
console.log(validPalindrome("ebcbbececabbacecbbcbe")); //true
console.log(validPalindrome("deeee")); //true
