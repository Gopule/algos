// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function (nums) {
  let monotone = false;
  for (let i = 1; i < nums.length; i++) {
    const difference = nums[i] - nums[i - 1];
    if (!monotone) {
      if (difference > 0) monotone = "increasing";
      else if (difference < 0) monotone = "decreasing";
    }
    if (monotone === "increasing" && difference < 0) return false;
    if (monotone === "decreasing" && difference > 0) return false;
  }
  return true;
};

console.log(isMonotonic([1, 2, 2, 3])); //true
console.log(isMonotonic([6, 5, 4, 4])); //true
console.log(isMonotonic([1, 3, 2])); //false
console.log(isMonotonic([1, 2, 4, 5])); //true
console.log(isMonotonic([1, 1, 1])); //true
