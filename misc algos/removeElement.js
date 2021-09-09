var removeElement = function (nums, val) {
  let k = 0;
  let swap = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      let temp = nums[i];
      nums[i] = nums[swap];
      nums[swap] = temp;
      swap -= 1;
      i -= 1;
    }
    if (nums[i] === "_") {
      k = i;
      return k;
    }
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
console.log(removeElement([3, 3], 5)); //2
