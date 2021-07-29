function spiralTraverse(arr) {
  let result = [];
  while (arr.length) {
    if (arr.length === 1) {
      result.push(...arr[0]);
      arr.shift();
      break;
    }
    if (arr[0].length === 1) {
      result.push(arr[0][0]);
      arr.shift();
      continue;
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result.push(...arr[i]);
      } else {
        result.push(arr[i].pop());
      }
    }
    arr.shift();
    let end = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i === end) {
        let reverse = arr[i].reverse();
        result.push(...reverse);
        arr.pop();
      } else {
        result.push(arr[i].shift());
      }
    }
  }
  result = result.filter((cv) => {
    if (typeof cv === "number") return cv;
  });
  return result;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
