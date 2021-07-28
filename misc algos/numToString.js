function numToString(num) {
  num = num.toString();
  let arr = [];
  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }
  let string = "";
  let ones = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eigth",
    9: "nine",
  };
  let tens = {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninty",
  };
  let teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eigthteen",
    19: "nineteen",
  };
  if (arr.length === 4) {
    string += `${ones[arr[arr.length - 1]]} thousand`;
    arr.pop();
  }
  if (arr.length === 3) {
    if (string.length) string += ` ${ones[arr[arr.length - 1]]} hundred`;
    else string += `${ones[arr[arr.length - 1]]} hundred`;
    arr.pop();
  }
  if (arr.length === 2 && arr[arr.length - 1] === "1") {
    let store = `${arr[1]}${arr[0]}`;
    if (string.length) string += ` ${teens[store]}`;
    else string += `${teens[arr[store]]}`;
    arr.pop();
    arr.pop();
  }
  if (arr.length === 2) {
    if (string.length) string += ` ${tens[arr[arr.length - 1]]}`;
    else string += `${tens[arr[arr.length - 1]]}`;
    arr.pop();
  }
  if (arr.length === 1) {
    if (string.length) string += ` ${ones[arr[arr.length - 1]]}`;
    else string += `${ones[arr[arr.length - 1]]}`;
    arr.pop();
  }
  return string;
}

//num = 0 - 9999
console.log(numToString(2316)); //two thousand three hundred fourty six
