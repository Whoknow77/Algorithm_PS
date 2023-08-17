const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift()); // 2

function S(arr) {
  const leftStack = [];
  const rightStack = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      // 왼쪽
      case "<":
        if (leftStack.length > 0) rightStack.push(leftStack.pop());
        break;
      // 오른쪽
      case ">":
        if (rightStack.length > 0) leftStack.push(rightStack.pop());
        break;
      // 삭제
      case "-":
        if (leftStack.length > 0) leftStack.pop();
        break;
      // 삽입
      default:
        leftStack.push(arr[i]);
        break;
    }
  }
  return [leftStack, rightStack];
}

for (let i = 0; i < N; i++) {
  let arr = input[i].split(""); // a b c d
  const [leftStack, rightStack] = S(arr);
  console.log(leftStack.join("") + rightStack.reverse().join(""));
}
