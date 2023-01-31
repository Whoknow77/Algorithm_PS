// 조건 중 b를 유의해서 읽어야함
// parseInt를 써도 됨
function solution(a, b, n) {
  let sum = 0;
  while (n >= a) {
    sum += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + Math.floor(n % a);
  }
  return sum;
}
