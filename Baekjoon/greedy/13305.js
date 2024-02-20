const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const dis = input.shift().split(" ").map(BigInt);
const price = input.shift().split(" ").map(BigInt);
let answer = dis[0] * price[0];
let min = BigInt(price[0]);
for (let i = 1; i < n - 1; i++) {
	if (price[i] < min) {
		min = price[i];
	}
	answer += min * dis[i];
}
console.log(String(answer));
