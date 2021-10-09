var longestPalindrome = function (s) {
  let memo = {};
  let hasOne = false;
  let pairs = 0;
  for (let cv of s) {
    if (!memo[cv]) memo[cv] = 1;
    else memo[cv]++;
  }
  for (let key in memo) {
    if (!hasOne && memo[key] === 1) {
      pairs++;
      hasOne = true;
    }
    if (memo[key] % 2 === 0) pairs += memo[key];
    else if (memo[key] > 1) {
      if (!hasOne) {
        pairs++;
        hasOne = true;
      }
      pairs += memo[key] - 1;
    }
  }
  return pairs;
};

console.log(longestPalindrome("abccccdd")); //7
console.log(longestPalindrome("a")); //1
console.log(longestPalindrome("bb")); //2
