var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (end - start > 1) {
    mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) start = mid;
    else if (target < nums[mid]) end = mid;
    else if (target === nums[mid]) return mid;
  }
  if (target <= nums[start] || target >= nums[end]) {
    if (target > nums[end]) return end + 1;
    else if (target === nums[end]) return end;
    else if (target <= nums[start]) return start;
  }
  if (target > nums[mid]) return mid + 1;
  else return mid;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1, 3, 5, 6], 0)); //0
console.log(searchInsert([1], 0)); //0
console.log(searchInsert([1, 3], 1)); //0
