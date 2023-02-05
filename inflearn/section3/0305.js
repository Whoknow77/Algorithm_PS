function solution(s) {
  let numArray = [];
  const set = [...new Set(s)];
  for (let i = 0; i < set.length; i++) {
    numArray.push(s.lastIndexOf(set[i]) - s.indexOf(set[i]) + 1);
  }
  for (let i = 0; i < set.length; i++) {
    set[i] += numArray[i];
  }
  return set.join("").replace(/1/g, "");
}

// 정답
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt;
        cnt = 1;
      }
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
