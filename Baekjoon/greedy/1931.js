const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = [];
let sum = 0;
input.forEach((item) => {
	const [n, m] = item.split(" ").map(Number);
	arr.push([n, m]);
});
arr.sort((a, b) => {
	if (a[1] > b[1]) {
		return 1;
	} else if (a[1] === b[1]) {
		return a[0] - b[0];
	} else {
		return -1;
	}
});
let last = 0;
arr.forEach((item) => {
	if (last <= item[0]) {
		sum++;
		last = item[1];
	}
});
console.log(sum);
