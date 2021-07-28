function overLappingRectangle(l1, r1, l2, r2) {
  if (l2[1] > r1[1] && r1[0] > l2[0]) return true;
  if (l1[1] > r2[1] && r2[0] > l1[0]) return true;
  if (l1[1] > r2[1] && r1[0] > l2[0]) return true;
  if (l2[1] > r1[1] && r2[0] > l1[0]) return true;
  else return false;
}

console.log(overLappingRectangle([0, 10], [10, 0], [5, 5], [15, 5]));
console.log(overLappingRectangle([0, 2], [1, 1], [-2, -3], [0, 2]));
