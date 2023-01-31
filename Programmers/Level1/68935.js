// 10진수 => 3진수 : 10진수.toString(3);
// 3진수 => 10진수 : parseInt(3진수, 3);

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// 다른 사람 풀이(Math.pow => 제곱)

function solution2(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
