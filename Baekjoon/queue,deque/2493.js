const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0].split(" ").map(Number);
const answer = [];
const stack = [];

for (let i = 0; i < n; i++) {
	const now = arr[i];
	console.log(stack);

	while (stack.length && arr[stack.at(-1)] < now) {
		stack.pop();
	}

	// 자신보다 왼쪽에 더 큰 탑이 없음
	if (stack.length === 0) {
		answer.push(0);
	} else {
		// 자신보다 왼쪽에 더 큰 탑이 있음

		answer.push(stack.at(-1) + 1);
	}
	stack.push(i);
}

console.log(answer.join(" "));

// 5
// 6 9 5 7 4
