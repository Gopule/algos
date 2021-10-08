function isDigit(str) {
  const code = str.charCodeAt(str.length - 1);
  if (code > 47 && code < 58) return true;
  return false;
}

function parseString(log) {
  return log.split(" ").slice(1).join(" ");
}

function parseIdentifier(log) {
  return log.split(" ")[0];
}

var reorderLogFiles = function (logs) {
  let letterLogs = [];
  let digitLogs = [];
  for (let i = 0; i < logs.length; i++) {
    let cv = logs[i];
    if (isDigit(cv)) digitLogs.push(cv);
    else letterLogs.push(cv);
  }
  letterLogs.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    if (parseString(a) === parseString(b)) {
      return parseIdentifier(a) < parseIdentifier(b) ? -1 : 1;
    }
    return parseString(a) < parseString(b) ? -1 : 1;
  });

  return [...letterLogs, ...digitLogs];
};

console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
console.log(
  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
  ])
);
console.log(reorderLogFiles(["1 n u", "r 527", "j 893", "6 14", "6 82"]));
console.log(
  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
    "a2 act car",
  ])
);
