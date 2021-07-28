function isAnagram(str, test) {
  if (str.length !== test.length) return false;
  let memo = {};
  for (let cv of str) {
    if (memo[cv]) memo[cv]++;
    else memo[cv] = 1;
  }
  for (let cv of test) {
    if (!memo[cv]) return false;
    if (memo[cv] === 0) return false;
    else memo[cv]--;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("ab", "a")); // false
