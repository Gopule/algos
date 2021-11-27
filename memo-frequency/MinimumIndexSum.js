var findRestaurant = function (list1, list2) {
  const firstRests = {};
  for (let i = 0; i < list1.length; i++) {
    const restaurant = list1[i];
    firstRests[restaurant] = i;
  }
  let result = [];
  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
    const restaurant = list2[i];
    const friendsRestIdx = firstRests[restaurant];
    let idxDiff;
    if (friendsRestIdx !== undefined) {
      idxDiff = i + friendsRestIdx;
      if (idxDiff < min) {
        result = [restaurant];
        min = idxDiff;
      } else if (idxDiff === min) result.push(restaurant);
    }
  }
  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
); //["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
); //["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
); //["KFC","Burger King","Tapioca Express","Shogun"]
console.log(findRestaurant(["KFC"], ["KFC"])); //[["KFC"]
