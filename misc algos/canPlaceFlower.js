var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n === 0;
};

// var canPlaceFlowers = function (flowerbed, n) {
//   if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true;
//   if (flowerbed[0] === 0 && flowerbed[1] === 0) {
//     flowerbed[0] = 1;
//     n--;
//     if (n === 0) return true;
//   }
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 1) {
//       if (flowerbed[i + 2] === 0 && flowerbed[i + 3] === 0) {
//         n--;
//         flowerbed[i + 2] = 1;
//       }
//       if (flowerbed[i + 2] === 0 && flowerbed[i + 3] === undefined) {
//         n--;
//         break;
//       }
//     }
//   }
//   return n > 0 ? false : true;
// };

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); //true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); //true
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); //true
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); //true
console.log(canPlaceFlowers([0], 1)); //true
