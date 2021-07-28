function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let prev = mid - 1;
  let next = mid + 1;
  if (arr[end] === 1) return 0;
  else if (arr[start] === 0) return arr.length;
  while (end - start > 1 || arr[next] || arr[prev]) {
    if (arr[mid] === 0 && arr[prev] === 1) return arr.length - mid;
    if (arr[mid] === 1 && arr[next] === 0) return arr.length - next;
    if (arr[next] === 1 && arr[prev] === 1) {
      start = mid;
      mid = Math.floor((end + start) / 2);
    }
    if (arr[next] === 0 && arr[prev] === 0) {
      end = mid;
      mid = Math.floor((end + start) / 2);
    }
    prev = mid - 1;
    next = mid + 1;
  }
}

function countZeroes(arr) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  if (arr[0] === 0 && arr[arr.length - 1] === 0) return arr.length;
  if (arr[0] !== 0 && arr[arr.length - 1] !== 0) return 0;
  else {
    while (true) {
      if (arr[mid] === 0 && arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      if (arr[mid] === 1 && arr[mid + 1] === 0) {
        return arr.length - (mid + 1);
      }
      if (arr[mid] === 0) {
        end = mid;
        mid = Math.floor((start + end) / 2);
      } else {
        start = mid;
        mid = Math.floor((start + end) / 2);
      }
    }
  }
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
