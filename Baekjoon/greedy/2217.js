const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const w = input.map(Number).sort((a,b)=>b-a);
w.unshift(0);
let answer = 0;
for (let i = 1; i <= n; i++) {
  answer = Math.max(answer, w[i] * i);
}
console.log(answer);
// 15 10
