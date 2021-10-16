function isValid(str) {
  if (str.length === 1) return "YES";
  let memo = {};
  for (let cv of str) {
    if (memo[cv]) memo[cv]++;
    else memo[cv] = 1;
  }
  let values = Object.values(memo);
  let main = 0;
  let extra = false;
  if (values[0] === values[1]) main = values[0];
  else if (values[0] === values[2]) main = values[0];
  else return "NO";
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== main && !extra) extra = true;
    else if (values[i] !== main && extra) return "NO";
  }
  return "YES";
}

console.log(isValid("a")); //"YES"
console.log(isValid("aabbcd")); //"NO"
console.log(isValid("aabbccd")); //"YES"
