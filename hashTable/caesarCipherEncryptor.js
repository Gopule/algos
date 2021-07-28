function caesarCipherEncryptor(string, key) {
  key = key % 26;
  let alphabets = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let keyA = Object.keys(alphabets);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let cv = string[i];
    let newPlace = key + alphabets[cv];
    if (alphabets[cv] + key > 26) {
      newPlace = key - (26 - alphabets[cv]);
    }
    result += keyA[newPlace - 1];
  }
  return result;
}

console.log(caesarCipherEncryptor("tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm", 7));
