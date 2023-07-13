const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const dp = Array(n).fill(1);

// 6
// 10 30 10 20 20 10

for (let i = 0; i < arr.length - 1; i++) {
  for (let target = i + 1; target < arr.length; target++) {
    if (arr[i] > arr[target]) {
      dp[target] = Math.max(dp[i] + 1, dp[target]);
    }
  }
}

console.log(Math.max(...dp));
