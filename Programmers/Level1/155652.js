function solution(s, skip, index) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let char = "";
    let dup = [];
    let k = 0;
    while (dup.length !== index) {
      k++;
      char = alpha[(alpha.indexOf(s[i]) + k) % 26];
      if (!skip.includes(char)) {
        dup.push(char);
      }
    }
    answer.push(dup[dup.length - 1]);
  }
  return answer.join("");
}

console.log(solution("z", "abcdefghij", 20));
