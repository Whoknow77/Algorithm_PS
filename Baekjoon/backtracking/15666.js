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
const answer = [];
const BackTracking = (k, l) => {
	if (k === m) {
		answer.push(arr.join(" "));
		return;
	}
	for (let i = l; i < n; i++) {
		arr.push(inputarr[i]);
		BackTracking(k + 1, i);
		arr.pop();
	}
};

const Console = () => {
	BackTracking(0, 0);
	console.log([...new Set(answer)].join("\n"));
};

Console();
