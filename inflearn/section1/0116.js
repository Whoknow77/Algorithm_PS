function solution(s) {
  const arr = [];
  return [...s]
    .filter((item) => {
      if (arr.includes(item)) {
        return false;
      }
      arr.push(item);
      return true;
    })
    .join("");
}

// 정답

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}

console.log(solution("ksekkset"));
