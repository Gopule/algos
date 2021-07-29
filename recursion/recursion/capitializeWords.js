function capitalizeWords(words) {
  let result = [];
  function recursiveHelp(arr) {
    if (arr.length === 0) return;
    if (arr.length >= 1) {
      result.push(arr[0].toUpperCase());
    }
    return recursiveHelp(arr.slice(1));
  }
  recursiveHelp(words);
  return result;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
