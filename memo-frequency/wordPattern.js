var wordPattern = function (pattern, str) {
  const arr = str.split(" ");
  if (pattern.length !== arr.length) return false;
  const map = {};
  const used = {};
  for (let i = 0; i < arr.length; i++) {
    const letter = pattern[i];
    const word = arr[i];
    if (!map[letter] && !used[word]) {
      map[letter] = word;
      used[word] = letter;
    } else {
      if (map[letter] !== word) return false;
      if (!map[letter] && used[word] && used[word] !== letter) return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); //false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abba", "dog dog dog dog")); //false
console.log(wordPattern("aba", "dog cat cat")); //false
