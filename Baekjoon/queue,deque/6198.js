const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);
const stack = [];
let answer = 0;
for (let i = 0; i < n; i++) {
	const now = arr[i];
	while (stack.length > 0) {
		if (stack.at(-1) <= now) {
			stack.pop();
		} else {
			break;
		}
	}
	console.log(stack);

	answer += stack.length;
	stack.push(now);
}
console.log(answer);

// 각 스택은 해당 빌딩을 바라보는 빌딩들의 집합

// 5 1 4 1 3 1 2 1 1 1
