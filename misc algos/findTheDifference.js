function findTheDifference(string, test) {
  let memo = {};
  let result;
  for (let cv of string) {
    if (memo[cv]) memo[cv]++;
    else memo[cv] = 1;
  }
  for (let cv of test) {
    if (!memo[cv]) {
      result = cv;
      break;
    } else if (memo[cv] === 0) {
      result = cv;
      break;
    } else memo[cv]--;
  }
  return result;
}

console.log(findTheDifference("abcd", "abcde")); // 'e'
console.log(findTheDifference("", "y")); // 'y'
console.log(findTheDifference("ae", "aea")); // 'a'
