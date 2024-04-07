const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0].split(" ").map(Number);
const stack = [];
const answer = Array(n).fill(-1);
for (let i = n - 1; i >= 0; i--) {
	const now = arr[i];
	while (stack.length > 0) {
		const stackValue = stack.at(-1);
		if (stack.length > 0 && stackValue > now) {
			answer[i] = stackValue;
			break;
		} else {
			stack.pop();
		}
	}
	stack.push(arr[i]);
}
console.log(answer.join(" "));
