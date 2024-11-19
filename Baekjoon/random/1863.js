const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const data = input.map((value) => +value.split(" ")[1]);

let stack = [];
let count = 0;

data.map((v) => {
  while (stack.length !== 0 && v <stack.at(-1)) {
    stack.pop();
    count++;
  }

  if (v > 0 && (stack.length === 0 || v > stack.at(-1))) {
    stack.push(v);
  }
});

console.log(count + stack.length);
// 1 2 3 1
