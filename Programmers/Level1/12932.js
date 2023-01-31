// 문자풀이
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((a) => +a);
}

// 다른 사람 풀이
// 숫자를 이용함

function solution2(n) {
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
