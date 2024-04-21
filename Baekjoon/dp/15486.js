const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const dp = Array.from({ length: n + 1 }, () => 0);
const arr = input.map((line) => line.split(" ").map(Number));
let max = 0;
for (let i = 0; i < n; i++) {
	max = Math.max(dp[i], max);
	const [t, p] = arr[i];
	if (t + i <= n) {
		dp[i + t] = Math.max(dp[i + t], max + p);
	}
}
console.log(Math.max(...dp));

// i일 까지의 수익중 최대값을 dp로 저장해나간다.
