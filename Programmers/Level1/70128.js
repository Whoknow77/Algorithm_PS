function solution(a, b) {
  return a
    .map((num, index) => num * b[index])
    .reduce((prev, curr) => prev + curr, 0);
}

function solution2(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
