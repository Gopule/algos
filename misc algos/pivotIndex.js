function pivotIndex(nums) {
  let left = 0;
  let right = 0;
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    right += nums[i];
  }
  while (index < nums.length) {
    if (right === left) return index;
    left += nums[index];
    right -= nums[index + 1];
    index++;
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
console.log(pivotIndex([2, 1, -1])); //0
