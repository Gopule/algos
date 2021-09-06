var rotateString = function (str, goal) {
  let rotatedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === goal[0] && str.slice(i) === goal.slice(0, str.length - i)) {
      rotatedStr += str.slice(i);
      rotatedStr += str.slice(0, i);
      break;
    }
  }
  if (rotatedStr === goal) return true;
  else return false;
};

var rotateString = function (str, goal) {
  let count = str.length;
  while (count) {
    let temp = str[0];
    str = str.slice(1);
    str += temp;
    count--;
    if (str === goal) return true;
  }
  return false;
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));
