// 다른 사람 풀이

function solution(a, b) {
  while (b % 2 == 0) b /= 2;
  while (b % 5 == 0) b /= 5;
  let ans = 2;
  if (!b || a % b == 0) ans = 1;
  return ans;
}

// 무한소수와 달리 0.500000 같은 유한소수는 소수점 10자리까서 변환해서 비교해도 동일한 논리를 사용함
function solution2(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

console.log(solution(1, 16));
