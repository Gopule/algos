function tournamentWinner(competitions, results) {
  let memo = {};
  let cp = 0;
  let rp = 0;
  while (competitions[cp]) {
    if (results[rp] === 1) {
      if (memo[competitions[cp][0]]) {
        memo[competitions[cp][0]] += 3;
      } else {
        memo[competitions[cp][0]] = 3;
      }
    } else {
      if (memo[competitions[cp][1]]) {
        memo[competitions[cp][1]] += 3;
      } else {
        memo[competitions[cp][1]] = 3;
      }
    }
    cp++;
    rp++;
  }
  let keys = Object.keys(memo);
  let biggest = keys[0];

  for (let i = 0; i < keys.length; i++) {
    let cv = keys[i];
    if (memo[cv] > memo[biggest]) {
      biggest = cv;
    }
  }
  return biggest;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
