const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const dp = Array.from({ length: n }, () => 0);
const arr = input.map((line) => line.split(" ").map(Number));

for (let i = 0; i < n; i++) {
	const [t, p] = arr[i];
	if (t + i > n) continue;
	dp[i] = dp[i] + p;
	for (let j = t + i; j < n; j++) {
		dp[j] = Math.max(dp[i], dp[j]);
	}
}
console.log(Math.max(...dp));
