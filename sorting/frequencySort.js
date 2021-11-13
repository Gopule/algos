// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

var frequencySort = function (nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  }
  const arr = Object.entries(hash).sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] === b[1]) return b[0] - a[0];
    return 0;
  });
  const result = [];
  for (const cv of arr) {
    while (cv[1] > 0) {
      result.push(+cv[0]);
      cv[1]--;
    }
  }
  return result;
};

console.log(frequencySort([1, 1, 2, 2, 2, 3])); //[3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); //[5,-1,4,4,-6,-6,1,1,1]
