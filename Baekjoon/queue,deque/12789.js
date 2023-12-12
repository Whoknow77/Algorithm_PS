const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input[0].split(' ').map(Number)
const stack = [];
let cur = 1;
while (arr.length) {
  if (arr[0] === cur) {
    arr.shift();
    cur++;
  }
  else {
    stack.push(arr.shift())
  }
  while (stack.length) {
    if (stack[stack.length - 1] === cur) {
      stack.pop();
      cur++;
    }
    else {
      break;
    }
  }
}
if (stack.length === 0) {
  console.log("Nice");
}
else {
  console.log("Sad")
}
// 도키도키
