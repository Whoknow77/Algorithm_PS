const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const d = [];
d[0] = 0;
d[1] = 1;
d[2] = 3;
d[3] = 5;
for (let i = 3; i <=N; i++) {
  d[i] = (d[i - 1] + d[i - 2]*2) % 10007;
}

console.log(d[N]);
