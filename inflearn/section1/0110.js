function solution(s, t) {
  return [...s].filter((item) => item === t).length;
}

// 정답
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) {
      asnwer++;
    }
  }
  return answer;
}

// 정답2
function solution(s, t) {
  let answer = s.split(t).length - 1;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
