var nextGreaterElement = function (a, b) {
  let memo = {};
  for (let i = 0; i < b.length; i++) {
    let cv = b[i];
    memo[cv] = i;
  }
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let cv = a[i]; //current value
    let len = result.length;
    for (let j = memo[cv]; j < b.length; j++) {
      let ce = b[j]; //current element
      if (ce > cv) {
        result.push(ce);
        break;
      }
    }
    if (len === result.length) result.push(-1);
  }
  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); //[-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); //[3,-1]
