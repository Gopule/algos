function anagram(s) {
  if (s.length % 2 === 1) return -1;
  const mid = s.length / 2;
  const memo = {};
  for (let i = mid; i < s.length; i++) {
    const cv = s[i];
    if (memo[cv]) memo[cv]++;
    else memo[cv] = 1;
  }
  let count = 0;
  for (let i = 0; i < mid; i++) {
    const cv = s[i];
    if (memo[cv]) memo[cv]--;
    else count++;
  }
  return count;
}

console.log(anagram("aaabbb")); //3
console.log(anagram("ab")); //1
console.log(anagram("abc")); //-1
console.log(anagram("mnop")); //2
console.log(anagram("xyyx")); //0
console.log(anagram("xaxbbbxx")); //1
