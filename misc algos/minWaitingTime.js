function minimumWaitingTime(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let runningSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += runningSum;
    runningSum += arr[i];
  }
  return sum;
}

console.log(minimumWaitingTime([1, 2, 2, 3, 6]));
