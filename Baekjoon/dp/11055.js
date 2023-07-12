const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const dp = [...arr];

// 5 4 3 2 10
for (let i = 0; i < arr.length - 1; i++) {
  for (let target = i + 1; target < arr.length; target++) {
    if (arr[i] < arr[target]) {
      dp[target] = (dp[i] + arr[target]);
    }
}
console.log(dp)
}

console.log(Math.max(...dp));
