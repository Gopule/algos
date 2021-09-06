var backspaceCompare = function (str, test) {
  let strStack = [];
  let testStack = [];
  let i = 0;
  while (i < str.length || i < test.length) {
    if (str[i] === "#") strStack.pop();
    else if (str[i]) strStack.push(str[i]);

    if (test[i] === "#") testStack.pop();
    else if (test[i]) testStack.push(test[i]);

    i++;
  }
  if (strStack.join("") === testStack.join("")) return true;
  else return false;
};

console.log(backspaceCompare("ab#c", "ad#c")); //true
console.log(backspaceCompare("ab##", "c#d#")); //true
console.log(backspaceCompare("a##c", "#a#c")); //true
console.log(backspaceCompare("a#c", "b")); //false
