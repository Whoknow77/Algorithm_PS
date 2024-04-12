const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const count = {};
let length = 0;
let left = 0;
let right = 0;
while (right < n) {
	while (count[arr[right]] === k) {
		count[arr[left]]--;
		left++;
	}

	length = Math.max(right - left + 1, length);
	count[arr[right]] = (count[arr[right]] ?? 0) + 1;
	right++;
}
console.log(length);

// 8 2
// 1 1 1 2 2 3 3 3
