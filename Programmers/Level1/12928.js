function solution(n) {
  return Array(n)
    .fill(1)
    .map((a, b) => a + b)
    .filter((item) => !(n % item))
    .reduce((prev, curr) => prev + curr, 0);
}
