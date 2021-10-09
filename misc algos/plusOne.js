var plusOne = function (digits) {
  let end = digits.length - 1;
  if (digits[end] === 9) {
    while (digits[end] === 9) {
      digits[end] = 0;
      end--;
    }
    if (end < 0) digits.unshift(1);
    else digits[end] += 1;
  } else {
    digits[end] += 1;
  }
  return digits;
};

console.log(plusOne([1, 2, 3])); //[1,2,4]
console.log(plusOne([4, 3, 2, 1])); //[4,3,2,2]
console.log(plusOne([9, 9, 9])); //[1,0,0,0]
