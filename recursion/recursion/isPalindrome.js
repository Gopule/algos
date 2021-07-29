function palindrome(string) {
  if (string.length === 1) return true;
  if (string.length === 2) return string[0] === string[1];
  let firstEl = string[0];
  let lastEl = string[string.length - 1];
  if (firstEl !== lastEl) {
    return false;
  }
  let isPalindrome = palindrome(string.slice(1, -1));
  return isPalindrome;
}

console.log(palindrome("tacocat")); // true
console.log(palindrome("racecar")); //true
console.log(palindrome("prototype")); //false
