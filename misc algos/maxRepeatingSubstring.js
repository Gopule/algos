const maxRepeating = (sequence, word) => {
  let str = word;
  let count = 0;
  while (sequence.includes(str)) {
    count++;
    str += word;
  }
  return count;
};

console.log(maxRepeating("ababc", "ab")); //2
console.log(maxRepeating("ababc", "ba")); //1
console.log(maxRepeating("ababc", "ac")); //0
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")); //5
