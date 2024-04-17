const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = +input.shift();
for (let i = 0; i < t; i++) {
	const [n, m] = input[i * 3].split(" ").map(Number);
	const leftArr = input[i * 3 + 1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	const rightArr = input[i * 3 + 2]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	let right = 0;
	let sum = 0;
	for (let left = 0; left < leftArr.length; left++) {
		while (right <= rightArr.length) {
			// 만족 => left 이동
			if (leftArr[left] > rightArr[right]) {
				right++;
			} else {
				sum += right;
				break;
			}
		}
	}
	console.log(sum);
}
// 1 1 3 7 8
// 1 3 6
