// unfinished - doesn't fully work
function sortedFrequency(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let left;
  let right;
  while (true) {
    if (arr[mid] > target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    } else if (arr[mid] < target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    } else {
      let lp = mid - 1;
      let rp = mid + 1;
      while (!left) {
        if (arr[lp] === target) lp--;
        else {
          left = lp + 1;
          break;
        }
      }
      while (!right) {
        if (arr[rp] === target) rp++;
        else {
          right = rp - 1;
          break;
        }
      }
      return right - left + 1;
    }
  }
}

// console.log(count([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(count([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(count([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
// console.log(sortedFrequency([1,1,1,1,1,1,1,1,1,1,1 2, 2, 2, 2, 3], 4)); // -1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3,3,3,3,3,3,3,3,3,3], 4)); // -1
