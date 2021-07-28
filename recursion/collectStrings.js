function collectStrings(obj) {
  let result = [];
  function recursiveHelp(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        recursiveHelp(obj[key]);
      } else if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
    }
  }
  recursiveHelp(obj);
  return result;
}

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])
