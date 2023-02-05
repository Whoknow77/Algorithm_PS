function solution(str) {
  return parseInt(str.replace(/[^\d]/g, ""));
}

// 정답
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }

  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
