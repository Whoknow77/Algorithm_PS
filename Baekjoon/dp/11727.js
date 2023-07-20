const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const d = [];
d[0] = 1;
d[1] = 2;
for (let i = 2; i < N; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 10007;
}

console.log(d[N - 1]);
