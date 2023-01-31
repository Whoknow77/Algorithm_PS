function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}

function solution2(n) {
  return Array(n)
    .fill(1)
    .map((a, b) => a + b)
    .filter((num) => num % 2 != 0);
}
