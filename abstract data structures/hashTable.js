class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
    } else {
      this.keyMap[index].push([key, value]);
    }
    return this.keyMap;
  }

  get(key) {
    let i = this._hash(key);
    if (!this.keyMap[i]) return undefined;
    else if (this.keyMap[i].length === 1) return this.keyMap[i][0];
    else if (this.keyMap[i].length > 1) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        let cv = this.keyMap[i][j];
        if (cv[0] === key) return cv;
      }
    }
  }
}

let hash = new HashTable(53);
hash.set("pink", 4);
hash.set("knip", 5);
hash.get("pink");
console.log(hash);
