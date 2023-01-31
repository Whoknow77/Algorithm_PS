function solution(a, b) {
  if (a === b) {
    return a;
  }

  if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  return Array(b - a + 1)
    .fill(a)
    .map((a, b) => a + b)
    .reduce((prev, curr) => prev + curr, 0);
}

// 다른 사람 풀이

function solution2(a, b) {
  let s = 0;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

console.log(solution2(5, 3));
