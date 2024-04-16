const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);

const map = new Map();

for (let i = 0; i < n; i++) {
	const target = arr[i];
	if (map.get(target)) {
		map.set(target, map.get(target) + 1);
	} else {
		map.set(target, 1);
	}
}
let max = 0;
map.forEach((key, value) => {
	max = Math.max(item);
	console.log(key, value);
});
