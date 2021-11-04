function findMistake(arr) {
  arr = arr.sort((a, b) => a - b);
  const setObj = new Set(arr);
  const hash = new Map();
  let result = 0;
  for (const cv of arr) {
    if (!hash.has(cv)) hash.set(cv);
    else {
      result = cv;
      break;
    }
  }
  let count = 1;
  for (let key of setObj) {
    if (count !== key) {
      result += count;
      return result;
    }
    count++;
  }
}

console.log(findMistake([1, 1, 3, 4])); //3
console.log(findMistake([2, 2])); //3
console.log(findMistake([4, 3, 3, 1])); //5
console.log(findMistake([6, 3, 2, 4, 3, 1])); //8
console.log(findMistake([10, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //11
