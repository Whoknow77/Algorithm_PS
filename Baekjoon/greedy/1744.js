const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const minus = input.filter((item) => item <= 0).sort((a, b) => a - b);
const plus = input.filter((item) => item > 0).sort((a, b) => b - a);
let sum = 0;
const posF = (input) => {
	for (let i = 0; i < input.length; i += 2) {
		const num1 = Number(input[i]);
		const num2 = Number(input[i + 1]);

		if (i === input.length - 1) {
			sum += num1;
		} else if (num1 * num2 > num1 + num2) {
			sum += num1 * num2;
		} else {
			sum += num1 + num2;
		}
	}
};

const minusF = (input) => {
	for (let i = 0; i < input.length; i += 2) {
		const num1 = Number(input[i]);
		const num2 = Number(input[i + 1]);

		if (i === input.length - 1) {
			sum += num1;
		} else {
			sum += num1 * num2;
		}
	}
};

posF(plus);
minusF(minus);
console.log(sum);
