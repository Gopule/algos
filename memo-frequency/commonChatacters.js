var commonChars = function (words) {
  let memo = {};
  for (let i = 0; i < words[0].length; i++) {
    let cv = words[0][i];
    if (!memo[cv]) memo[cv] = 1;
    else memo[cv]++;
  }
  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    let tempMemo = {};
    for (let j = 0; j < currentWord.length; j++) {
      let cv = currentWord[j];
      if (tempMemo[cv]) tempMemo[cv]++;
      else tempMemo[cv] = 1;
    }
    for (let key in memo) {
      if (tempMemo[key] === undefined) delete memo[key];
      else if (memo[key] > 1 && memo[key] !== tempMemo[key]) {
        memo[key] = Math.min(memo[key], tempMemo[key]);
      }
    }
  }
  let result = [];
  for (let key in memo) {
    while (memo[key] > 0) {
      result.push(key);
      memo[key]--;
    }
  }
  return result;
};

console.log(commonChars(["bella", "label", "roller"])); //["e","l","l"]edoCteeL tsetnoc"
console.log(commonChars(["cool", "lock", "cook"])); //["c","o"]
