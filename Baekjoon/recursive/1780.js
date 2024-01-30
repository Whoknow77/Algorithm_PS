const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));

const count = [0, 0, 0]; // -1 0 1

const recursion = (n, x, y) => {
	const num = paper[x][y];
	let numCount = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (paper[x + i][y + j] === num) {
				numCount++;
			} else break;
		}
	}

	if (numCount === n * n) {
		count[num + 1]++;
	} else {
		n /= 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				recursion(n, x + i * n, y + j * n);
			}
		}
	}
};

recursion(n, 0, 0);
console.log(count.join("\n"));

// 1개의 종이 개수 표현 가능(1)
// 3^k-1개의 행렬의 종이 개수를 알면 3^k개의 행렬의 종이 개수 알 수 있음
// 3의배수의 행렬의 종이 개수를 모두 알 수 있음
