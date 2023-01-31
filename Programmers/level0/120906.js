function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((prev, curr) => prev + curr, 0);
}

function solution2(n) {
  return n
    .toString()
    .split("")
    .map((item) => +item)
    .reduce((prev, curr) => prev + curr);
}
