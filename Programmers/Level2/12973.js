function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[0] != s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length ? 0 : 1;
}

console.log(solution("cdcd"));

// push와 pop으로 구현하는 것이 더 효율 적임 스택은
