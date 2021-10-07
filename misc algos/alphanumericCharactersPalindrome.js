var validCheck = function (str, index) {
  let code = str.charCodeAt(index);
  if (
    (code > 64 && code < 91) ||
    (code > 96 && code < 123) ||
    (code > 47 && code < 58)
  )
    return true;
  else return false;
};

var isPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let left = str[start].toLowerCase();
    let right = str[end].toLowerCase();
    let leftYes = validCheck(str, start);
    let rightYes = validCheck(str, end);
    if (!leftYes || !rightYes) {
      if (!leftYes) start++;
      if (!rightYes) end--;
    } else if (left !== right) return false;
    else {
      start++;
      end--;
    }
  }
  return true;
};

// var isPalindrome = function(str) {
//   let dic = {
//     'a':true,
//     'b':true,
//     'c':true,
//     'd':true,
//     'e':true,
//     'f':true,
//     'g':true,
//     'h':true,
//     'i':true,
//     'j':true,
//     'k':true,
//     'l':true,
//     'm':true,
//     'n':true,
//     'o':true,
//     'p':true,
//     'q':true,
//     'r':true,
//     's':true,
//     't':true,
//     'u':true,
//     'v':true,
//     'w':true,
//     'x':true,
//     'y':true,
//     'z':true,
//     '0':true,
//     '1':true,
//     '2':true,
//     '3':true,
//     '4':true,
//     '5':true,
//     '6':true,
//     '7':true,
//     '8':true,
//     '9':true,
//   }
//   let start = 0
//   let end = str.length - 1
//   while (start < end) {
//     const left = str[start].toLowerCase()
//     const right = str[end].toLowerCase()
//     const leftYes = dic[left]
//     const rightYes = dic[right]
//     if (!leftYes || !rightYes) {
//       if (!leftYes) start++
//       if (!rightYes) end--
//     } else if (left !== right) return false
//     else {
//       start++
//       end--
//     }
//   }
//   return true
// };

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
