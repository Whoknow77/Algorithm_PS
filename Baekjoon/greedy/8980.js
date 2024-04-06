const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, c] = input.shift().split(" ").map(Number);
const m = +input.shift();
const arr = input.map((item) => item.split(" ").map(Number));
const result = Array(n + 1).fill(0);
let answer = 0;
arr.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0];
	}
	return a[1] - b[1];
});
for (let i = 0; i < m; i++) {
	const [start, end, box] = arr[i];
	const temp = result.slice(start, end);
	const maxValue = Math.max(...temp);
	const possibleBox = Math.min(c - maxValue, box);
	for (let j = start; j < end; j++) {
		result[j] += possibleBox;
	}
	answer += possibleBox;
}

console.log(answer);
