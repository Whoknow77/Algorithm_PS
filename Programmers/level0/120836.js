function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      sum++;
    }
  }
  return sum + 1;
}

// 다른 사람 풀이
function solution2(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}
