function isHappy(num) {
  let memo = {};
  let str;
  let sum = 0;
  while (num > 1) {
    if (memo[num]) return false;
    else memo[num] = 1;
    str = num.toString();
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i] * str[i]);
    }
    num = sum;
    sum = 0;
    console.log(num);
  }
  return true;
}

console.log(isHappy(19)); //true
console.log(isHappy(2)); //false
