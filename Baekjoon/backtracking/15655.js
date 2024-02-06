const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const inputarr = input
	.shift()
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);

const arr = [];
const isused = Array(n).fill(0);
BackTracking(0, 0);

function BackTracking(k, l) {
	if (k === m) {
		console.log(arr.join(" "));
		return;
	}

	for (let i = l; i < n; i++) {
		if (!isused[i]) {
			arr.push(inputarr[i]);
			isused[i] = 1;
			BackTracking(k + 1, i + 1);
			arr.pop();
			isused[i] = 0;
		}
	}
}
