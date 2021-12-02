var findWords = function (words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  const result = [];

  for (const word of words) {
    if (
      canBeTyped(word, row1) ||
      canBeTyped(word, row2) ||
      canBeTyped(word, row3)
    )
      result.push(word);
  }

  return result;

  function canBeTyped(word, row) {
    for (const char of word) {
      if (!row.has(char.toLowerCase())) return false;
    }
    return true;
  }
};

// var findWords = function(words) {
//   const firstRow = {}
//   const secondRow = {}
//   const thirdRow = {}
//   const maps = [firstRow, secondRow, thirdRow]
//   const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
//   for (let i = 0; i < rows.length; i++) {
//     const map = maps[i]
//     const row = rows[i]
//     for (let j = 0; j < row.length; j++) map[row[j]] = true
//   }
//   const result = []
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i]
//     let map
//     let includedAllLetter = true
//     const firstLetter = word[0].toLowerCase()
//     if (firstRow[firstLetter]) map = firstRow
//     else if (secondRow[firstLetter]) map = secondRow
//     else map = thirdRow
//     for (let j = 1; j < word.length; j++) {
//       const letter = word[j].toLowerCase()
//       if (!map[letter]) {
//         includedAllLetter = false
//         break
//       }
//     }
//     if (includedAllLetter) result.push(word)
//   }
//   return result
// };

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); //["Alaska","Dad"]
console.log(findWords(["omk"])); //[]
console.log(findWords(["adsdf", "sfd"])); //["adsdf","sfd
