function solution(arr) {
  let num = 2;
  while (true) {
    if (
      arr.filter((item) => {
        return parseInt(num % item) === 0;
      }).length === arr.length
    ) {
      return num;
    } else {
      num++;
    }
  }
}

// 다른 풀이(더 빠름)
// x * y / 최대공약수 = 최소공배수
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

console.log(solution([2, 6, 8, 14]));
