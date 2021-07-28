var reformatNumber = function (number) {
  let result = "";
  if (number.length <= 3) return number;
  let string = "";
  for (let cv of number) {
    if (cv === " " || cv === "-") continue;
    else string += cv;
  }
  if (string.length === 4) {
    result += string.slice(0, 2);
    result += "-";
    result += string.slice(2);
    return result;
  }
  let remainder = "";
  if (string.length % 3 === 1) remainder = string.slice(-4);
  if (string.length % 3 === 2) remainder = string.slice(-2);
  let i = 0;
  let count = 0;
  while (i < string.length - remainder.length) {
    if (count === 3) {
      result += "-";
      count = 0;
    }
    result += string[i];
    count++;
    i++;
  }
  if (remainder.length === 4) {
    result += "-";
    result += remainder.slice(0, 2);
    result += "-";
    result += remainder.slice(2);
  }
  if (remainder.length === 2) {
    result += "-";
    result += remainder;
  }
  return result;
};

console.log(reformatNumber("1-23-45 6")); //"123-456"
console.log(reformatNumber("123 4-567")); //"123-45-67"
console.log(reformatNumber("123 4-5678")); //"123-456-78"
console.log(reformatNumber("--17-5 229 35-39475 ")); //"175-229-353-94-75"
console.log(reformatNumber("12")); //"12"
console.log(reformatNumber("9964")); //"99-64"
