function solution(myStr) {
  const answer = myStr.split(/a|b|c/g).filter((item) => item !== "");
  return answer.length ? answer : ["EMPTY"];
}

const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];

console.log(solution("abcd"));
