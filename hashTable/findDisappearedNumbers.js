function findDisappearedNumbers(nums) {
  let memo = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let cv = nums[i];
    if (!memo[cv]) memo[cv] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!memo[i + 1]) result.push(i + 1);
  }
  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
