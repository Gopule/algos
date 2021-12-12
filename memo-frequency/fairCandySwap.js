var fairCandySwap = function (aliceSizes, bobSizes) {
  let aliceSum = 0;
  let bobSum = 0;
  for (let i = 0; i < aliceSizes.length || i < bobSizes.length; i++) {
    if (aliceSizes[i] !== undefined) aliceSum += aliceSizes[i];
    if (bobSizes[i] !== undefined) bobSum += bobSizes[i];
  }
  const targetSum = (aliceSum + bobSum) / 2;
  const bobSet = new Set(bobSizes);
  for (const num of aliceSizes) {
    const key = targetSum - (aliceSum - num);
    if (bobSet.has(key)) return [num, key];
  }
};

console.log(fairCandySwap([1, 1], [2, 2])); //[1,2]
console.log(fairCandySwap([1, 2], [2, 3])); //[1,2]
console.log(fairCandySwap([2], [1, 3])); //[2,3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); //[5,4]
console.log(fairCandySwap([1, 5, 10], [1, 1, 6])); //[5,1]
