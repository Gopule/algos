function isValidSubsequence(array, sequence) {
  let memo = {};
  let result = [];
  for (let num of sequence) {
    if (num) memo[num] = num;
  }
  for (let i = 0; i < array.length; i++) {
    let num = [array[i]];
    if (memo[num] && result.length < sequence.length) {
      result.push(memo[num]);
    }
  }
  let i = 0;
  while (result[i] === sequence[i]) {
    if (!result[i]) {
      return true;
    }
    i++;
  }
  return false;
  // O( N + 2M )
}

function isValidSubsequence(array, sequence) {
  let arrPointer = 0;
  let seqPointer = 0;
  while (sequence[seqPointer] && array[arrPointer]) {
    if (sequence[seqPointer] === array[arrPointer]) {
      seqPointer++;
      arrPointer++;
    } else {
      arrPointer++;
    }
  }
  if (seqPointer === sequence.length) {
    return true;
  } else {
    return false;
  }
  //O(N)
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
