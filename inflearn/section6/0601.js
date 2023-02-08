function solution(s) {
  let answer = "YES";
  let stack = [];
  for (x of s) {
    stack.push(x);
    if (stack.includes("(") && stack.includes(")")) {
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  return answer;
}

// 정답
function solution(s) {
  let stack = [];
  for (x of s) {
    if (x === "(") {
      stack.push("(");
    } else {
      if (stack.length !== 0) {
        // 닫는 괄호가 더 많은 경우
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    // 여는 괄호가 더 많은 경우
    return "NO";
  }
  return "YES";
}

let a = "(()(()))(()";
console.log(solution(a));
