const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input.shift().split(" ").map(Number);

const dp = Array(n + 1).fill(0);
let max = 0;
for (let i = 0; i < n; i++) {
	const num = arr[i];
	dp[num] = dp[num - 1] + 1;
	max = Math.max(dp[num], max);
}
console.log(n - max);

// 연속하는 최장 증가수열에 해당하는 수들을 제외하고 이동시키면 됨 LIS

// https://mygumi.tistory.com/276
