//O(N) time / O(1) space
var maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;
  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }
  return max;
};
//O(N^2) time / O(1) space
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      max = Math.max(max, profit);
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
