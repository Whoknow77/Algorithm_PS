const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[1]); // 3

let leftStack = input[0].split(""); // a b c d
let rightStack = [];

for (let i = 0; i < N; i++) {
  const command = input[2 + i];

  switch (command) {
    case "L":
      if (leftStack.length > 0) rightStack.push(leftStack.pop());
      break;
    case "D":
      if (rightStack.length > 0) leftStack.push(rightStack.pop());
      break;
    case "B":
      if (leftStack.length > 0) leftStack.pop();
      break;
    // 삽입
    default:
      leftStack.push(command[2]);
      break;
  }
}

console.log(leftStack.join("") + rightStack.reverse().join(""));
