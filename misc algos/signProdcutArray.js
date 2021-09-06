const signFunc = (product) => {
  if (product > 0) return 1;
  else if (product === 0) return 0;
  else if (product < 0) return -1;
};

var arraySign = function (nums) {
  let product = 1;
  for (let cv of nums) {
    if (cv > 0) product *= 1;
    else if (cv < 0) product *= -1;
    else {
      product = 0;
      break;
    }
  }
  return signFunc(product);
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); //1
console.log(arraySign([1, 5, 0, 2, -3])); //0
console.log(arraySign([-1, 1, -1, 1, -1])); //-1
