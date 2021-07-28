function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num, i) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let maxDigit = mostDigits(arr);
  for (let i = 0; i < maxDigit; i++) {
    let radixArr = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      let curr = arr[j];
      let digit = getDigit(curr, i);
      if (digit) radixArr[digit].push(curr);
      else {
        radixArr[0].push(curr);
      }
    }
    arr = [].concat(...radixArr);
  }
  return arr;
};

// const radixSort = arr => {
//   let maxD = 0
//   maxD = mostDigits(arr)
//   let radixArr = [[],[],[],[],[],[],[],[],[],[]]
//   for (let i = 0 ; i < maxD; i++) {
//     for (let j = 0 ; j < arr.length ; j++) {
//       let curr = arr[j]
//       if (getDigit(curr,i)) radixArr[getDigit(curr,i)].push(curr)
//       else {
//         radixArr[0].push(curr)
//       }
//     }
//     console.log(radixArr)
//     arr = []
//     for (let k = 0 ; k < radixArr.length; k++) {
//       let indexArr = radixArr[k]
//       while(indexArr.length) {
//         arr.push(indexArr.shift())
//       }
//     }
//   }
//   return arr
// }

console.log(radixSort([56, 345, 43, 6, 8, 200])); // 4
