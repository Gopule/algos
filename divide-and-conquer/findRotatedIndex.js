// unfinished - doesn't fully work
function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  while (true) {
    if (arr[mid] === target) return mid;
    if (arr[start] === target) return start;
    if (arr[end] === target) return end;
    if (end - start <= 1) break;
    if (arr[mid] < target && arr[end] > target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] > target && arr[start] < target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] < target && arr[start] < target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] > target && arr[start] > target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] < target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] > target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
  }
  return -1;
}

function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  while (true) {
    if (arr[mid] === target) return mid;
    if (arr[start] === target) return start;
    if (arr[end] === target) return end;
    if (arr[mid] > target && arr[end] > target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] < target && arr[end] > target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    } else {
      while (true) {
        if (end - start <= 1) break;
        if (arr[mid] < target) {
          start = mid;
          mid = Math.floor((start + end) / 2);
        }
        if (arr[mid] > target) {
          end = mid;
          mid = Math.floor((start + end) / 2);
        }
      }
    }
    break;
  }
  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 17, 18, 7, 9], 7)); // 8
