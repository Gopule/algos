function romanToInt(str) {
  let dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (dic[str[i]] >= dic[str[i + 1]] || !str[i + 1]) sum += dic[str[i]];
    if (dic[str[i]] < dic[str[i + 1]]) {
      let total = dic[str[i + 1]] - dic[str[i]];
      sum += total;
      i++;
    }
  }
  return sum;
}

console.log(romanToInt("III")); //3
console.log(romanToInt("IV")); //4
console.log(romanToInt("IX")); //9
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994

// M = 1000
// CM = 900
// D = 500
// CD = 400
// XD = 390
// VD = 390
// C = 100
// XC = 90
// L = 50
// XL = 40
// X = 10
// IX = 9
// V = 5
// IV = 4
// I = 1
