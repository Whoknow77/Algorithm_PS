function solution(s) {
  let answer = s.toLowerCase().replace(/[^a-z]/g, "");
  return answer === [...answer].reverse().join("") ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
