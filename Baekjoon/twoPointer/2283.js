const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const map = new Map();

let arr = Array(1000001).fill(0);
for (let i = 0; i < n; i++) {
	const [a, b] = input[i].split(" ").map(Number);
	for (let j = a; j < b; j++) {
		arr[j]++;
	}
}

let left = 0;
let right = 0;
let sum = 0;

while (left <= right && right <= 1000001) {
	if (sum === k) {
		console.log(left + " " + right);
		return;
	} else if (sum < k) {
		sum += arr[right++];
	} else {
		sum -= arr[left++];
	}
}
console.log("0 0");
