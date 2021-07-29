function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr[i]);
          arr.splice(i + 1, 1);
        }
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([15, 10, 3, 1, 4, 7, 5]));
console.log(insertionSort([1, 2, 3, 4, 5, 7, 6]));
