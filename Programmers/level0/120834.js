function solution(age) {
  answer = "";
  alpha = "abcdefghij".split("");
  for (let i of age
    .toString()
    .split("")
    .map((a) => +a)) {
    answer += alpha[i];
  }
  return answer;
}

//다른 사람 풀이

function solution2(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
