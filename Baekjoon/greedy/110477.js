const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [_, money] = input.shift().split(" ").map(Number);
input.sort((a, b) => b - a);
let count = 0;
for (const x of input) {
	// 남은 돈
	if (money >= x) {
		count += parseInt(money / x);
		money = parseInt(money % x);
	}
}
console.log(count);
