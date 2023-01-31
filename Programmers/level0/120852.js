function solution(n) {
  let answer = [];
  // 2로 나누어 떨어질때까지 나누기
  while (n % 2 === 0) {
    answer.push(2);
    n = n / 2;
  }

  // 3부터 루트 n으로 나누어 떨어질 때까지 나누기

  for (let i = 3; i * i <= n; i = i + 2) {
    while (n % i == 0) {
      answer.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    answer.push(n);
  }

  // 중복 제거
  return [...new Set(answer)];
}

// 더 직관적인 풀이
function solution2(n) {
  let answer = [];
  let tmp = 2;
  while (n >= 2) {
    if (n % tmp === 0) {
      answer.push(tmp);
      n /= tmp;
    } else tmp++;
  }
  return [...new Set(answer)];
}

console.log(solution(420));
