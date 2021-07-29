function flatten(nestedArr) {
  let arr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    let el = nestedArr[i];
    if (Array.isArray(el)) {
      arr = arr.concat(flatten(el));
    } else {
      arr.push(el);
    }
  }
  return arr;
}

function flatten(array) {
  let arr = [];
  if (!array.length) return arr;
  if (Array.isArray(array[0])) {
    arr = arr.concat(flatten(array[0]));
  } else {
    arr.push(array[0]);
  }
  arr = arr.concat(flatten(array.slice(1)));

  return arr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
