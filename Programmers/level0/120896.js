function solution(s) {
  s = [...s].sort();
  let answer = [];
  while (s.length != 0) {
    if (s[0] === s[1]) {
      s.splice(0, s.lastIndexOf(s[0]) + 1);
    } else {
      answer.push(s[0]);
      s.shift();
    }
  }

  return answer.join("");
}

// 다른 사람 풀이
function solution2(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

console.log(solution("abcabcadc"));
// aaabbcccd aabbcccd abbcccd
