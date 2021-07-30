function arrayOfProducts(arr) {
  let products = new Array(arr.length).fill(1);

  let lrp = 1;
  for (let i = 0; i < arr.length; i++) {
    products[i] = lrp;
    lrp *= arr[i];
  }

  let rrp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    products[i] *= rrp;
    rrp *= arr[i];
  }

  return products;
}

function arrayOfProducts(arr) {
  let result = [];
  let running = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) running *= arr[j];
    }
    result.push(running);
    running = 1;
  }
  return result;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
