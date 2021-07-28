//optimized solution
function getNthFib(n) {
  let memo = { 1: 0, 2: 1 };
  function fib(n) {
    if (n in memo) return memo[n];
    else {
      memo[n] = getNthFib(n - 1) + getNthFib(n - 2);
      return memo[n];
    }
  }
  return fib(n);
}

//alternative solution
function getNthFib(n) {
  if (n < 2) return 0;
  function fib(n) {
    if (n === 1 || n === 0) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  return fib(n - 2);
}

//alternative solution

function getNthFib(n) {
  if (n === 2) return 1;
  else if (n === 1) return 0;
  else return getNthFib(n - 1) + getNthFib(n - 2);
}
