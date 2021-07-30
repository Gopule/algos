function minimumCharactersForWords(arr) {
  let memo = {};
  let word = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let cv = arr[i];
    for (let j = 0; j < cv.length; j++) {
      if (!word[cv[j]]) word[cv[j]] = 1;
      else word[cv[j]]++;
    }
    for (let key in word) {
      if (memo[key] === undefined || (memo[key] && memo[key] < word[key]))
        memo[key] = word[key];
    }
    word = {};
  }
  for (let key in memo) {
    while (memo[key] > 0) {
      result.push(key);
      memo[key]--;
    }
  }
  return result;
}

console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);
