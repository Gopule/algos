// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

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
