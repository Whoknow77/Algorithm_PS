function solution(s) {
  return [...s].map((item) => item.toUpperCase()).join("");
}

// 정답
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}

// 정답2
function solution(s) {
  return s.toUpperCase();
}

let str = "ItisTimeToStudy";
console.log(solution(str));
