function solution(s) {
  let stack = [];
  let sum = 0; // 막대기의 합
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        // 레이저
        sum += stack.length;
      } else {
        // 막대기의 끝
        sum += 1;
      }
    }
  }
  return sum;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
