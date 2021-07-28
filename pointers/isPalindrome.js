function isPalindrome(string) {
  let backPointer;
  let frontPointer;
  if (string.length % 2) {
    frontPointer = Math.floor(string.length / 2) + 1;
    backPointer = Math.floor(string.length / 2) - 1;
  } else {
    frontPointer = string.length / 2;
    backPointer = string.length / 2 - 1;
  }
  while (string[backPointer] === string[frontPointer] && string[backPointer]) {
    backPointer--;
    frontPointer++;
  }
  if (!string[backPointer]) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("abcdcba"));
