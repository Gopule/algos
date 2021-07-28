function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) return [array[i], array[j]];
    }
  }
  return [];
}

function twoNumberSum(arr, targetSum) {
  let arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (targetSum === currentSum) {
      return [arr[left], arr[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right++;
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  let memo = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (memo[targetSum - num]) {
      return [num, targetSum - num];
    } else {
      memo[num] = true;
    }
  }
  return [];
}

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// expected result: [11, -1]

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10); // [11, -1]
