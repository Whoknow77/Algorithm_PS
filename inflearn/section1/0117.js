function solution(s) {
  const arr = [];
  return s.filter((item) => {
    if (arr.includes(item)) {
      return false;
    }
    arr.push(item);
    return true;
  });
}

// 정답
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
