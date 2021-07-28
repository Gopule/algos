function defangIPaddr(address) {
  let arr = address.split(".");
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i];
    result += "[.]";
  }
  return (result += arr.pop());
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
