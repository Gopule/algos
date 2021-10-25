function gemstones(arr) {
  let hash = {};
  for (const letter of arr[0]) {
    if (!hash[letter]) hash[letter] = 1;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = {};
    const word = arr[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (hash[letter]) temp[letter] = 1;
    }
    hash = temp;
  }
  let gems = 0;
  for (const key in hash) gems++;
  return gems;
}

console.log(gemstones(["abc", "abc", "bc"])); //2
console.log(gemstones(["abcdde", "baccd", "eeabg"])); //2
console.log(gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"])); //4
