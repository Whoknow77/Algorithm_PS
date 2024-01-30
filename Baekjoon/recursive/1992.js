const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((item) => item.split("").map((v) => +v));

const answer = [];
const recursive = (N, x, y) => {
	let numCount = 0;
	const num = arr[x][y];
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[x + i][y + j] === num) {
				numCount++;
			} else {
				break;
			}
		}
	}

	if (numCount === N * N) {
		answer.push(num);
	} else {
		answer.push("(");
		N /= 2;
		// 4분면 조사
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 2; j++) {
				// 각 사분면의 첫번째 부터 조사
				recursive(N, x + i * N, y + j * N);
			}
		}
		answer.push(")");
	}
};

recursive(N, 0, 0);
console.log(answer.join(""));

// ((110(0101))(0010)1(0001))
