// 다른 사람 풀이
function solution(n) {
  let result = 0;

  // 소수 찾기
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return true;
    }
    return false;
  }

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) result++;
  }

  return result;
}

function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) answer++;
  }
  return answer;
}
