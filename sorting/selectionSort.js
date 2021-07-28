function selectionSort(arr) {
  let smallest;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    smallest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        index = j;
        smallest = arr[j];
      }
    }
    if (smallest < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

function selectionSort(array) {
  let smallest = Infinity;
  let i = 0;
  let j;
  let swapIndex;
  let swap = false;
  while (i < array.length) {
    j = i;
    while (j < array.length) {
      if (array[j] < smallest) {
        smallest = array[j];
        swapIndex = j;
        swap = true;
      }
      j++;
    }
    if (swap) {
      let temp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = temp;
      swap = false;
      smallest = Infinity;
    } else break;
    i++;
  }
  return array;
}

function selectionSort(arr) {
  let smallest;
  let smallestIndex;
  let swap;
  for (let i = 0; i < arr.length; i++) {
    smallest = arr[i];
    swap = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallestIndex = j;
        smallest = arr[j];
        swap = true;
      }
    }
    if (swap) {
      let temp = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = temp;
    } else break;
  }
  return arr;
}

console.log(selectionSort([15, 10, 3, 1, 4, 7, 5]));
