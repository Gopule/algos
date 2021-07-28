function stringSearch(string, target) {
  let totalCount = 0;
  let place = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    for (let j = 0; j < target.length; j++) {
      let cj = target[j];
      place = 0;
      if (cj !== string[i + j]) break;
      place = j + 1;
      if (j === target.length - 1) {
        totalCount++;
      }
    }
    i = i + place;
  }
  return totalCount;
}

function stringSearch(string, target) {
  let totalCount = 0;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      let cj = target[j];
      if (cj !== string[i + j]) {
        count = 0;
        break;
      }
      if (cj === string[i + j]) {
        count++;
      }
      if (count === target.length) {
        totalCount++;
        count = 0;
      }
    }
  }
  return totalCount;
}

function stringSearch(string, target) {
  let totalCount = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      let cj = target[j];
      if (cj !== string[i + j]) break;
      if (j === target.length - 1) totalCount++;
    }
  }
  return totalCount;
}

console.log(stringSearch("zowomgaomg", "omg")); //2
