function reverseVowels(string) {
  let dic = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };
  let result = "";
  let strVowels = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (dic[char]) strVowels.push(string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (dic[char]) {
      result += strVowels.pop();
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(reverseVowels("hello")); // holle
