function firstDuplicateValue(arr) {
  for (const cv of arr) {
    const absValue = Math.abs(cv);
    if (arr[absValue - 1] < 0) return absValue;
    arr[absValue - 1] *= -1;
  }
  return -1;
}

function firstDuplicateValue(arr) {
  let memo = {};
  for (let cv of arr) {
    if (memo[cv]) return cv;
    else memo[cv] = 1;
  }
  return -1;
}

// console.log(firstDuplicateValue([2,1,5,2,3,3,4]))
console.log(firstDuplicateValue([2, 1, 5, 5, 2, 3, 3, 4]));
// console.log(firstDuplicateValue([1,2,3,4,5,6]))
