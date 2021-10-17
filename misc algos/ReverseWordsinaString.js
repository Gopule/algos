var reverseWords = function (str) {
  const arr = str.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let cv = arr[i];
    let runningString = "";
    for (let j = cv.length - 1; j >= 0; j--) {
      runningString += cv[j];
    }
    if (i === arr.length - 1) result += runningString;
    else result += runningString + " ";
  }
  return result;
};

console.log(reverseWords("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")); //"doG gniD"
