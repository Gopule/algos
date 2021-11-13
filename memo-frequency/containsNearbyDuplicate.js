var containsNearbyDuplicate = function (nums, k) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num] !== undefined && i - hash[num] <= k) return true;
    hash[num] = i;
  }
  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num]) hash[num].push(i);
    else hash[num] = [i];
  }
  for (const key in hash) {
    const curArr = hash[key];
    if (curArr.length > 1) {
      for (let i = 1; i < curArr.length; i++) {
        const difference = Math.abs(hash[key][i] - hash[key][i - 1]);
        if (difference <= k) return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
