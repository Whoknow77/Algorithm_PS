function solution(a, b, c) {
  const arr = [a, b, c].sort((a, b) => a - b);
  return arr[0] + arr[1] > arr[2] ? "YES" : "NO";
}

// 정답
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a < b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 77));
