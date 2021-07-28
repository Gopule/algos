function generateDocument(characters, document) {
  let cm = {};
  let dm = {};
  for (let i of characters) {
    !cm[i] ? (cm[i] = 1) : cm[i]++;
  }
  for (let i of document) {
    !dm[i] ? (dm[i] = 1) : dm[i]++;
  }
  for (let key in dm) {
    if (dm[key] > cm[key] || !cm[key]) {
      return false;
    }
  }
  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
