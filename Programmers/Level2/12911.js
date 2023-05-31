function solution(n) {
  const nbinarylength = n
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;
  let answer = 0;
  for (let i = n + 1; i <= 1000000; i++) {
    const mbinarylength = i
      .toString(2)
      .split("")
      .filter((item) => item === "1").length;
    if (nbinarylength === mbinarylength) {
      answer = i;
      break;
    }
  }
  return answer;
}

console.log(solution(78));
