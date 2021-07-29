function split(arr) {
  let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  let secondHalf = arr.slice(Math.floor(arr.length / 2));
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  let p1 = 0,
    p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      mergedArr.push(arr1[p1]);
      p1++;
    } else {
      mergedArr.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 > p2) {
    return [...mergedArr, ...arr1.slice(p1)];
  } else {
    return [...mergedArr, ...arr2.slice(p2)];
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let splitArr = split(arr);
  let left = mergeSort(splitArr[0]);
  let right = mergeSort(splitArr[1]);
  return merge(left, right);
}

console.log(mergeSort([1, 3, 4, 6, 8, 2, 3, 5, 7, 9, 10]));

// const split = (wholeArr) => {
//   let first = [];
//   let second = [];
//   first = wholeArr.slice(0, Math.floor(wholeArr.length / 2));
//   second = wholeArr.slice(Math.floor(wholeArr.length / 2));
//   return [first, second];
// };

// const merge = (arr1, arr2) => {
//   let finalArr = [];
//   let p1 = 0;
//   let p2 = 0;
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] < arr2[p2]) {
//       finalArr.push(arr1[p1]);
//       p1++;
//     } else {
//       finalArr.push(arr2[p2]);
//       p2++;
//     }
//   }
//   if (p1 > p2) {
//     finalArr = [...finalArr, ...arr1.slice(p1)];
//   }
//   if (p2 > p1) {
//     finalArr = [...finalArr, ...arr2.slice(p2)];
//   }
//   return finalArr;
// };

// const mergeSort = (arr) => {
//   if (arr.length === 0 || arr.length === 1) {
//     return arr;
//   }
//   let splitArr = split(arr);
//   let leftArr = mergeSort(splitArr[0]);
//   let rightArr = mergeSort(splitArr[1]);
//   return merge(leftArr, rightArr);
// };
