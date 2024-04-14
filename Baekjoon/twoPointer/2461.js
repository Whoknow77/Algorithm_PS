const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const group = [];
const idx = Array(1001).fill(1);
const hq = [];
let max = 0;
for (let i = 0; i < n; i++) {
	const students = input[i]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	max = Math.max(max, students[0]);
	group.push(students);
	heap.push(hq, (arr[i][0], i));
}
