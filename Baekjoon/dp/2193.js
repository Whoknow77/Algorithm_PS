const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input;
const arr = Array(n + 1).fill(0);
arr[1] = 1;
arr[2] = 1;
const solution = (n) => {
	if (arr[n]) {
		return BigInt(arr[n]);
	} else {
		arr[n] = solution(n - 2) + solution(n - 1);
		return BigInt(arr[n]);
	}
};

console.log(solution(n).toString());
