function solution(s) {
  return parseInt(s.length % 2) === 0
    ? s[parseInt(s.length / 2 - 1, 10)] + s[parseInt(s.length / 2, 10)]
    : s[parseInt(s.length / 2)];
}

// 정답
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
console.log(solution("good"));
