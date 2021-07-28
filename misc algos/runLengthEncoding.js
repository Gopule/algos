function runLengthEncoding(string) {
  let count = 1;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i + 1] === string[i]) {
      if (count === 9) {
        result += `${count}${string[i]}`;
        count = 1;
      }
    } else {
      result += `${count}${string[i]}`;
      count = 1;
    }
  }
  return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
