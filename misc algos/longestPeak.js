function longestPeak(arr) {
  let big = 0;
  let up = 1;
  let down = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && down === 0) up++;
    if (arr[i] === arr[i - 1] && down === 0) up = 1;
    if (arr[i] < arr[i - 1] && up > 1) down++;
    if (arr[i + 1] === undefined && down > 0) {
      if (up + down > big) big = up + down;
    }
    if (arr[i] <= arr[i + 1] && down > 0) {
      if (up + down > big) big = up + down;
      up = 1;
      down = 0;
    }
  }
  return big;
}

// console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))//6
// console.log(longestPeak([1, 3, 2])) //3
// console.log(longestPeak([1, 2, 3, 4, 5, 1])) //6
