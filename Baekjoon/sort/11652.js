const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((num) => BigInt(num));

const map = new Map();

for (let i = 0; i < n; i++) {
	const target = arr[i];
	if (map.get(target)) {
		map.set(target, map.get(target) + 1);
	} else {
		map.set(target, 1);
	}
}
const answerArr = [...map].sort((a, b) => {
	if (a[1] > b[1]) {
		return -1;
	} else if (a[1] === b[1]) {
		if (a[0] > b[0]) {
			return 1;
		} else {
			return -1;
		}
	} else {
		return 1;
	}
});
console.log(answerArr[0][0].toString());

// bigInt는 뒤에 n이 붙어서 -로 정렬 불가능
