function sortArrayByParity(nums) {
  let evens = [];
  let odds = [];
  for (let cv of nums) {
    if (cv % 2 === 0 || cv === 0) evens.push(cv);
    else odds.push(cv);
  }
  return evens.concat(odds);
}

console.log(sortArrayByParity([3, 1, 2, 4])); // [4,2,1,3] //evens on left odds on left
