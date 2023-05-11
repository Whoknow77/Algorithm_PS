const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const answer = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    answer.push(input.substring(i, j + 1));
  }
}
console.log(new Set(answer).size);
