function containsDuplicate(nums) {
  let memo = {};
  for (let cv of nums) {
    if (memo[cv]) {
      return true;
    }
    memo[cv] = 1;
  }
  return false;
}

function containsDuplicate(nums) {
  return nums.length !== new Set(nums).size;
}
