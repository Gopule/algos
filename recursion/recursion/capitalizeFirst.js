function capitalizeFirst(arr) {
  let result = [];
  function recursiveHelp(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr.length >= 1) {
      result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    }
    return recursiveHelp(arr.slice(1));
  }
  recursiveHelp(arr);
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
