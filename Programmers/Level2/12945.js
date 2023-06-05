function solution(s) {
  while (s.length) {
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i - 1] === s[i]) {
        s.slice(i - 1, 2);
      }
    }
  }
  return 1;
}
console.log(solution("baabaa"));
