function solution(a, b, c) {
  if (a < b && a < c) {
    return a;
  }

  if (b < c && b < a) {
    return b;
  }

  if ((c < a) & (c < b)) {
    return c;
  }
}

// 정답
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solution(6, 5, 11));
