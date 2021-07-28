var destCity = function (paths) {
  let locations = {};
  for (let cv of paths) {
    if (!locations[cv[0]]) locations[cv[0]] = 1;
    if (locations[cv[0]]) locations[cv[0]]++;
    if (!locations[cv[1]]) locations[cv[1]] = 1;
  }
  for (let key in locations) {
    if (locations[key] === 1) return key;
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
); //"Sao Paulo"
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
); //"A"
console.log(destCity([["A", "Z"]])); //"Z"
console.log(
  destCity([
    ["jMgaf WaWA", "iinynVdmBz"],
    [" QCrEFBcAw", "wRPRHznLWS"],
    ["iinynVdmBz", "OoLjlLFzjz"],
    ["OoLjlLFzjz", " QCrEFBcAw"],
    ["IhxjNbDeXk", "jMgaf WaWA"],
    ["jmuAYy vgz", "IhxjNbDeXk"],
  ])
); //""wRPRHznLWS""
