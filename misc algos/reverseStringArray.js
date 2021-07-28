function reverseString(arr) {
  let front = 0;
  let back = arr.length - 1;
  while (front < back) {
    let temp = arr[front];
    arr[front] = arr[back];
    arr[back] = temp;
    front++;
    back--;
  }
  return arr;
}
