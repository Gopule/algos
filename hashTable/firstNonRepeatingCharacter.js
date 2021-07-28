function firstNonRepeatingCharacter(string) {
  let memo = {};
  let firstChar = true;
  for (let i of string) {
    !memo[i] ? (memo[i] = 1) : memo[i]++;
  }
  for (let key in memo) {
    if (memo[key] === 1) {
      firstChar = key;
      break;
    }
  }
  if (firstChar === true) {
    return -1;
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === firstChar) return i;
    }
  }
}

console.log(firstNonRepeatingCharacter("abcdcaf"));
