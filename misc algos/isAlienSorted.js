var isAlienSorted = function (words, order) {
  let memo = {};
  let count = 1;
  for (let cv of order) {
    memo[cv] = count;
    count++;
  }
  for (let i = 1; i < words.length; i++) {
    const a = words[i - 1];
    const b = words[i];
    const maxLen = a.length > b.length ? a.length : b.length;
    // const maxLen = Math.max(a.length, b.length)
    for (let j = 0; j < maxLen; j++) {
      const indexA = memo[a[j]] || 0;
      const indexB = memo[b[j]] || 0;
      if (indexA > indexB) return false;
      else if (indexA < indexB) break;
    }
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); //true
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
); //false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); //false
