function funnyString(string) {
  const forwardCodes = [];
  for (let i = 0; i < string.length - 1; i++) {
    const code = string.charCodeAt(i);
    const nextCode = string.charCodeAt(i + 1);
    const difference = Math.abs(code - nextCode);
    forwardCodes.push(difference);
  }
  let j = 0;
  for (let i = string.length - 1; i >= 1; i--) {
    const code = string.charCodeAt(i);
    const nextCode = string.charCodeAt(i - 1);
    const difference = Math.abs(code - nextCode);
    if (difference !== forwardCodes[j]) return "Not Funny";
    j++;
  }
  return "Funny";
}

console.log(funnyString("acxz")); //'Funny'
console.log(funnyString("bcxz")); //'Not Funny'
