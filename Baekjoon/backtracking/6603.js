const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
let realAnswer = "";
for (let i = 0; i < input.length; i++) {
	const initialArr = input[i].split(" ").map(Number);
	initialArr.shift();
	const isused = Array(initialArr.length).fill(0);
	let answer = [];
	const arr = [];
	const back = (k, l) => {
		if (k === 6) {
			answer += arr.join(" ") + "\n";
			return;
		}
		for (let i = l; i < initialArr.length; i++) {
			if (!isused[i]) {
				isused[i] = 1;
				arr.push(initialArr[i]);
				back(k + 1, i + 1);
				isused[i] = 0;
				arr.pop();
			}
		}
	};

	back(0, 0);
	realAnswer += answer + "\n";
}
console.log(realAnswer);
