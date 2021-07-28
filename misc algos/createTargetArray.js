var createTargetArray = function (nums, index) {
  let target = [];
  let count = 0;
  while (count < index.length) {
    target.splice(index[count], 0, nums[count]);
    count++;
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));
