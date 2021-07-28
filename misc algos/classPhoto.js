function classPhotos(red, blue) {
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);
  let count = 0;
  let front;
  let back;
  if (red[0] > blue[0]) {
    back = red;
    front = blue;
  } else {
    back = blue;
    front = red;
  }
  while (front[count] && back[count]) {
    if (front[count] >= back[count]) return false;
    count++;
  }
  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
