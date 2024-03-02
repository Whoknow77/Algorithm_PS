const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr2 = [];
for (let i = 0; i < n; i++) {
	const inputarr = input[i].split(" ").map(Number);
	arr2.push(inputarr);
}

const arr = Array.from({ length: n }, () => []);
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		for (let k = 0; k < n; k++) {
			if (arr2[j][i] && arr2[i][k]) {
				arr2[j][k] = 1;
			}
		}
	}
}

for (let i = 0; i < arr2.length; i++) {
	console.log(arr2[i].join(" "));
}
