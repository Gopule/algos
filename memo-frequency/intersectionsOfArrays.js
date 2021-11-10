var intersect = function (nums1, nums2) {
  const memo1 = {};
  const memo2 = {};
  for (const num of nums1) {
    if (memo1[num]) memo1[num]++;
    else memo1[num] = 1;
  }
  for (const num of nums2) {
    if (memo2[num]) memo2[num]++;
    else memo2[num] = 1;
  }
  let big;
  let small;
  if (nums1.length > nums2.length) {
    big = memo1;
    small = memo2;
  } else {
    big = memo2;
    small = memo1;
  }
  let result = [];
  for (const key in big) {
    while (big[key] && small[key]) {
      result.push(+key);
      big[key]--;
      small[key]--;
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); //[2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); //[4,9]
