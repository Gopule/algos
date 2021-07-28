function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      console.log("break>>>>>>>>>>>>>>>>>>>>>>>");
      start = Math.max(start, seen[char]);
    }
    console.log("start", start);
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log("longest", longest);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log("seen", seen);
  }
  return longest;
}
//  1234
console.log(findLongestSubstring("thisisawesome")); //6

// console.log(findLongestSubstring('rithmschool')) //7
