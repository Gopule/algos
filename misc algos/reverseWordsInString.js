function reverseWordsInString(str) {
  let arr = [];
  let running = "";
  let result = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== " " && str[i]) {
      while (str[i] !== " " && str[i]) {
        running += str[i];
        i++;
      }
      arr.push(running);
      running = "";
    } else if (str[i] === " ") {
      while (str[i] === " ") {
        running += str[i];
        i++;
      }
      arr.push(running);
      running = "";
    }
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    result += arr[j];
  }
  return result;
}

console.log(reverseWordsInString("AlgoExpert is the best!")); //'best! the is AlgoExpert'
