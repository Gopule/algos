function findThreeLargestNumbers(arr) {
  let result = [null, null, null];
  for (let i = 0; i < arr.length; i++) {
    if (!result[2]) result[2] = arr[i];
    else if (arr[i] < result[2] && !result[1]) result[1] = arr[i];
    else if (arr[i] < result[1] && !result[0]) result[0] = arr[i];
    else if (arr[i] > result[2]) {
      result.shift();
      result.push(arr[i]);
    } else if (arr[i] > result[1]) {
      result[0] = result[1];
      result[1] = arr[i];
    } else if (arr[i] > result[0]) {
      result.shift();
      result.unshift(arr[i]);
    }
  }
  return result;
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
