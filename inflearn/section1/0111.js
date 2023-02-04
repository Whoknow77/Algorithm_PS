function solution(s) {
  return s.match(/[A-Z]/g).length;
}

// 정답
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
