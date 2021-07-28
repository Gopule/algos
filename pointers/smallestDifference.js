function smallestDifference(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  console.log(arr1, arr2);
  let smallest = Infinity;
  let p1 = 0;
  let p2 = 0;
  let result = [];
  let difference = 0;
  while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
    let first = arr1[p1];
    let second = arr2[p2];
    if (first === undefined && second !== undefined)
      first = arr1[arr1.length - 1];
    if (second === undefined && first !== undefined)
      second = arr2[arr2.length - 1];
    if (first < 0 && second >= 0) difference = Math.abs(first + second);
    else if (second < 0 && first >= 0) difference = Math.abs(second + first);
    else difference = Math.abs(Math.abs(first) - Math.abs(second));
    if (difference < smallest) {
      smallest = difference;
      result = [first, second];
    }
    if (first < second) p1++;
    else p2++;
  }
  return result;
}

console.log(
  smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])
); //[28,26]
