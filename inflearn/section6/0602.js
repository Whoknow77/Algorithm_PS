function solution(s) {
  let answer = "";
  let stack = [];
  for (x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        answer += x;
      }
    }
  }
  return answer;
}

// 정답
function solution(s) {
  stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
