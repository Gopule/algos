function stringifyNumbers(obj) {
  let result = {};
  function helper() {
    for (let key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        result[key] = stringifyNumbers(obj[key]);
      } else if (typeof obj[key] === "number") {
        result[key] = obj[key].toString();
      } else {
        result[key] = obj[key];
      }
    }
  }
  helper(obj);
  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}
*/

console.log(stringifyNumbers(obj)); // ['I', 'AM', 'LEARNING', 'RECURSION']
