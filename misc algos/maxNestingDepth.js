var maxDepth = function (s) {
  let count = 0;
  let max = count;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      max = Math.max(count, max);
    } else if (s[i] === ")") {
      count--;
    }
  }
  return max;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("1+(2*3)/(2-1)")); // 1
console.log(maxDepth("1")); // 0
console.log(maxDepth("8*((1*(5+6))*(8/6))")); // 0
