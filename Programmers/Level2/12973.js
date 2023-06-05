function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[0] != s[i]) {
      stack.unshift(s[i]);
    } else {
      stack.shift();
    }
  }
  return stack.length ? 0 : 1;
}

console.log(solution("cdcd"));

// unshift를 하여 맨앞으로 넣고, 뺄때는 shift으로 뺀다.
