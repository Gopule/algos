function maxSubArray(nums, jump) {
  if (nums.length < jump) return null;
  let p1 = 0;
  let p2 = jump;
  let maxSum = -Infinity;
  while (nums[p2] || nums[p2] === 0) {
    let subArray = nums.slice(p1, p2);
    let tempSum = 0;
    for (let i = 0; i < subArray.length; i++) {
      tempSum += subArray[i];
    }
    maxSum = Math.max(maxSum, tempSum);
    p1++;
    p2++;
  }
  return maxSum;
}

function maxSubArray(nums, jump) {
  if (nums.length < jump) return null;
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < jump; i++) {
    maxSum += nums[i];
  }
  for (let i = jump; i < nums.length; i++) {
    sum = maxSum + nums[i] - nums[i - jump];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 4));
