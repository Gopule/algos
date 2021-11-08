function calculateWeight(num) {
  const weight = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return weight[num];
}
function weightedUniformStrings(string, queries) {
  const hash = {};
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i - 1]) sum = 0;
    sum += calculateWeight(string[i]);
    hash[sum] = true;
  }
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const cv = queries[i];
    if (hash[cv]) result.push("Yes");
    else result.push("No");
  }
  return result;
}

console.log(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10])); //["Yes","Yes","Yes","Yes","No","No"]
console.log(weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5])); //["Yes", "No", "Yes", "Yes", "No"]
