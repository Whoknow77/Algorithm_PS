const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((item) => item.trim());
arr.sort((a, b) => {
	if (a.length > b.length) {
		return 1;
	} else if (a.length < b.length) {
		return -1;
	} else {
		const sum1 = a
			.split("")
			.filter((item) => +item)
			.map(Number)
			.reduce((k, t) => k + t, 0);
		const sum2 = b
			.split("")
			.filter((item) => +item)
			.map(Number)
			.reduce((k, t) => k + t, 0);
		if (sum1 > sum2) {
			return 1;
		} else if (sum1 < sum2) {
			return -1;
		} else {
			if (a > b) {
				return 1;
			} else if (a < b) {
				return -1;
			}
		}
	}
});
console.log(arr.join("\n"));

// 길이 짧은거
// 숫자 합 작은거
// 사전순
