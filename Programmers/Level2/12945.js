function solution(n) {
  let arr = [0, 1];
  function fib(n) {
    if (arr[n] !== undefined) {
      return arr[n];
    }
    arr[n] = fib(n - 1) + fib(n - 2);
    return arr[n];
  }
  return fib(n);
}

console.log(solution(10));
