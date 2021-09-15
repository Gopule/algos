var intersection = function (nums1, nums2) {
  let memo = {};
  let result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (let cv of set1) {
    if (!memo[cv]) memo[cv] = true;
  }
  for (let cv of set2) {
    if (memo[cv]) result.push(cv);
  }
  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[9,4]
console.log(intersection([2, 1], [1, 2])); //[1,2]
