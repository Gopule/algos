// Given an array of strings words, return true if it forms a valid word square.

// A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).

var validWordSqaure = function (words) {
  const columns = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (columns[j]) columns[j] += word[j];
      else columns[j] = word[j];
    }
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== columns[i]) return false;
  }
  return true;
};

console.log(validWordSqaure(["abcd", "bnrt", "crmy", "dtye"])); //true
console.log(validWordSqaure(["abcd", "bnrt", "crm", "dt"])); //true
console.log(validWordSqaure(["ball", "area", "read", "lady"])); //false
console.log(validWordSqaure(["ball", "asee", "let", "lep"])); //false
