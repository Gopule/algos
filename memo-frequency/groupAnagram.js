function groupAnagrams(words) {
  let memo = {};
  for (let i = 0; i < words.length; i++) {
    let cv = words[i];
    let sortedWord = cv.split("").sort().join("");
    if (memo[sortedWord]) memo[sortedWord].push(cv);
    else memo[sortedWord] = [cv];
  }
  let result = [];
  for (let key in memo) {
    result.push(memo[key]);
  }
  return result;
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
); //[['yo','oy'], ['flop','olfp'],['act','tac','cat'],['foo']]
