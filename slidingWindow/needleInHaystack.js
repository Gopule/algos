function needleInHaystack(haystack, needle) {
  if (!haystack.length && !needle.length) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack.slice(i, needle.length + i)) return i;
  }
  return -1;
}

function needleInHaystack(haystack, needle) {
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    let cv = string[i];
    if (cv === subString[0]) {
      while (subString[j] === string[j + i]) {
        j++;
        if (j === subString.length) return i;
      }
      j = 0;
    }
  }
  return -1;
}

console.log(needleInHaystack("mississippi", "issip"));
console.log(needleInHaystack("hello", "ll"));
