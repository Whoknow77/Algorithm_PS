const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0].split(" ").map(Number);
let answer = 0;
const count = Array(n + 1).fill(0);
let right = 0;
for (let left = 0; left < n; left++) {
	while (right < n) {
		if (count[arr[right]]) {
			break;
		} else {
			count[arr[right]] = 1;
			right++;
		}
	}
	if (count[arr[left]]) {
		count[arr[left]]--;
	} else {
		count[arr[left]] = 0;
	}
	answer += right - left;
}
console.log(answer);

// 1 12 123 1234 12345 (5)
// 2 23 234 2345 (4)
// 3 34 345 (3)
// 4 45 (2)
// 5 (1)

// 1 2 3 1 2

// 1 12 123 1231
// 2 23 231 2312
// 3 31 312
// 1 12
// 2
