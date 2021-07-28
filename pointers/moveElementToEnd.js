function moveElementToEnd(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[right] === num) right--;
    if (arr[right] !== num && arr[left] !== num) left++;
    if (arr[right] !== num && arr[left] === num) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      right--;
      left++;
    }
  }
  return arr;
}

// console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)) //[1,3,4,2,2,2,2,2]
console.log(moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2)); //[1,3,4,2,2,2,2,2]
