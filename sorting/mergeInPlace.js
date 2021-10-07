function merge(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < m || p2 < n) {
    if (p1 >= m && p2 < n) {
      nums1.pop();
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      p1++;
    } else if (nums2[p2] !== undefined && nums1[p1] > nums2[p2]) {
      nums1.pop();
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      m++;
    } else if (
      nums2[p2] !== undefined &&
      nums1[p1] <= nums2[p2] &&
      nums1[p1 + 1] > nums2[p2]
    ) {
      nums1.pop();
      nums1.splice(p1 + 1, 0, nums2[p2]);
      p2++;
      p1++;
      m++;
    } else {
      p1++;
    }
  }
  console.log(nums1);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([2, 0], 1, [1], 1));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3));
console.log(merge([-1, 0, 1, 1, 0, 0, 0, 0, 0], 4, [-1, 0, 2, 2, 3], 5));
