var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    minDiff = Math.min(minDiff, diff);
  }
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff === minDiff) result.push([arr[i - 1], arr[i]]);
  }
  return result;
};

console.log(minimumAbsDifference([4, 2, 1, 3])); //[[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); //[[1,3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); //[[-14,-10],[19,23],[23,27]]
