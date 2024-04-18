const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[0].split("");
const stack = [];
const numStack = [];
const num = { "]": 3, ")": 2 };

let closeBefore = false;
let openBefore = false;
let sum = 0;

for (let str of arr) {
	if (str === "(" || str === "[") {
		// 두번 이상 열린 경우
		if (openBefore) {
			numStack.push(sum);
			sum = 0;
		}
		// 처음 열린 경우
		stack.push(str);
		openBefore = true;
		closeBefore = false;
	} else {
		const pop = stack.pop();

		// 짝이 맞는 경우
		if ((str === ")" && pop === "(") || (str === "]" && pop === "[")) {
			// 두번 이상 닫는 경우
			if (closeBefore) {
				sum = sum * num[str] + numStack.pop();
			}
			// 처음 닫는 경우
			else {
				sum += num[str];
				console.log(sum);
			}
		}
		// 짝이 맞지 않는 경우 리턴
		else {
			console.log(0);
			return;
		}
		openBefore = false;
		closeBefore = true;
	}
	console.log(
		"stack: " + stack + "      numStack: " + numStack + " sum: " + sum
	);
}
console.log(stack.length > 0 ? 0 : sum);

// (()[[]])([])
