const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, c] = input.shift().split(" ").map(Number);

const arr = input[0].split(" ").map(Number);
const map = new Map();
for (let i = 0; i < n; i++) {
	const target = arr[i];
	if (map.get(target)) {
		map.set(target, map.get(target) + 1);
	} else {
		map.set(target, 1);
	}
}
const answer = [];
[...map]
	.sort((a, b) => {
		if (a[1] > b[1]) {
			return -1;
		} else if (a[1] < b[1]) {
			return 1;
		}
	})
	.forEach((item) => {
		for (let i = 0; i < item[1]; i++) {
			answer.push(item[0]);
		}
	});
console.log(answer.join(" "));
// 숫자, [인덱스, 빈도수]
