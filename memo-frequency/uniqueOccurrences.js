var uniqueOccurrences = function (arr) {
  const hash = {};
  for (const num of arr) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  }
  const freq = Object.values(hash);
  const setOfFreq = new Set(freq);
  return setOfFreq.size === freq.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); //true
console.log(uniqueOccurrences([1, 2])); //false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true
