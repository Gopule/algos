const isOdd = (val) => val % 2 !== 0;

function someRecursive(nums, callback) {
  if (nums.length === 1 && !callback(nums[nums.length - 1])) return false;
  if (callback(nums[nums.length - 1])) return true;
  return someRecursive(nums.slice(0, -1), callback);
}

console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
