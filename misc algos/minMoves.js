var minMoves = function (nums) {
  let min = nums[0];
  let sum = min;
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    // min = nums[i] < min ? nums[i] : min;
    min = Math.min(nums[i], min);
  }
  return sum - nums.length * min;
};

console.log(minMoves([1, 2, 3])); // 3
console.log(minMoves([1, 2, 2, 4, 3, 5])); // 3
console.log(minMoves([1, 1, 1])); // 0
console.log(minMoves([1, 1000000000])); // 0
console.log(minMoves([1, 2, 1000000000])); // 0
