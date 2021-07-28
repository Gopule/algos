function shortestDistance(arr, word1, word2) {
  let c1 = -1;
  let c2 = -1;
  let shortest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word1) {
      c1 = i;
    } else if (arr[i] === word2) {
      c2 = i;
    }
    if (c1 > -1 && c2 > -1) {
      shortest = Math.min(shortest, Math.abs(c1 - c2));
    }
  }
  return shortest;
}

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
); // 3
console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
); // 1
