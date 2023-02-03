function solution(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }

  return sum;
}

console.log(solution(10));
