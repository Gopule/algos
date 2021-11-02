function pangrams(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = {};
  for (const cv of string) {
    if (!letters[cv.toLowerCase()]) letters[cv.toLowerCase()] = 1;
  }
  for (const cv of alphabet) {
    if (!letters[cv]) return "not pangram";
  }
  return "pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
); //pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); //not pangram
