const uniqueMorseRepresentations = function (words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const dic = {};
  for (let i = 0; i < alphabets.length; i++) {
    dic[alphabets[i]] = morse[i];
  }
  const morseSet = new Set();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let runningString = "";
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      runningString += dic[letter];
    }
    morseSet.add(runningString);
  }
  return morseSet.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); //2
console.log(uniqueMorseRepresentations(["a"])); //1
console.log(
  uniqueMorseRepresentations(["zocd", "gjkl", "hzqk", "hzgq", "gjkl"])
); //2
