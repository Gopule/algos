function threeNumberSum(arr, sum) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[left] + arr[right];
      if (arr[i] + currentSum === sum) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
      } else if (arr[i] + currentSum < sum) {
        left++;
      } else if (arr[i] + currentSum > sum) {
        right--;
      }
    }
  }
  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
