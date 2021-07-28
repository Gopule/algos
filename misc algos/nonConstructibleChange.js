function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let i = 0;
  let sum = 0;
  while (coins[i] <= sum + 1) {
    sum += coins[i];
    i++;
  }
  return sum + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
