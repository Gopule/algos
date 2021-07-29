function productSum(arr, count = 1) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let cv = arr[i];
    if (Array.isArray(cv)) {
      total += productSum(cv, count + 1);
    } else {
      total += cv;
    }
  }
  return total * count;
}
