function moveZeroes(nums) {
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
    i++;
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
}

function moveZeroes(nums) {
  let i = 0;
  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      zeros.push(0);
    }
  }
  return nums.concat(zeros);
}

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0])); //[0]
console.log(moveZeroes([0, 0, 1])); //[1,0,0]
