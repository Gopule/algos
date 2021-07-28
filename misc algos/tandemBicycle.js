function tandemBicycle(red, blue, fastest) {
  if (fastest) {
    red.sort((a, b) => b - a);
    blue.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (i < red.length) {
      if (red[i] > blue[i]) sum += red[i];
      else sum += blue[i];
      i++;
    }
    return sum;
  } else {
    red.sort((a, b) => a - b);
    blue.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (i < red.length) {
      if (red[i] > blue[i]) sum += red[i];
      else sum += blue[i];
      i++;
    }
    return sum;
  }
}
//if fastest = true return max total speed
// [9,5,5,3,2]
// [1,2,3,6,7]
// [9,5,5,6,7] = result (32)

//if fastest = false return min total speed
// [1,2,3,6,7]
// [2,3,5,5,9]
// [2,3,5,6,9] = result (25)

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
