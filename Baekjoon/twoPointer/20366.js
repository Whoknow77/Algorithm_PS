const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0]
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);

let min = Infinity;
for (let i = 0; i < n; i++) {
	for (let j = i + 1; j < n; j++) {
		let snowMan1 = arr[i] + arr[j];
		let start = 0;
		let end = n - 1;
		while (start < end) {
			// 처음에 만든 눈사람과 중복해결
			if (start === i || start === j) {
				start++;
				continue;
			}
			if (end === i || end === j) {
				end--;
				continue;
			}
			let snowMan2 = arr[start] + arr[end];
			min = Math.min(min, Math.abs(snowMan1 - snowMan2));
			if (snowMan1 > snowMan2) {
				start++;
			} else if (snowMan1 < snowMan2) {
				end--;
			} else {
				console.log(0);
				return;
			}
		}
	}
}
console.log(min);
