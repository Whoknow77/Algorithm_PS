const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = [];
for (let i = 0; i < input.length; i++) {
	const item = input[i].split(" ").map(Number);
	for (let j = 0; j < item.length; j++) {
		arr.push(item[j]);
	}
}
const n = +arr.shift();

console.log(
	arr
		.map((item) => Number(item.toString().split("").reverse().join("")))
		.sort((a, b) => a - b)
		.filter((item) => +item)
		.join("\n")
);
