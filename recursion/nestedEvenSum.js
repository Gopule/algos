function nestedEvenSum(obj) {
  let sum = 0;
  function recursiveHelp(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        recursiveHelp(obj[key]);
      } else if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }
  recursiveHelp(obj);
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
