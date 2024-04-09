const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l] = input.shift().split(" ").map(Number);
const map = new Map();
const answer = [];
for (let i = 0; i < l; i++) {
	if (map.get(input[i])) {
		map.delete(input[i]);
		map.set(input[i], map.size + 1);
	} else {
		map.set(input[i], map.size + 1);
	}
}
let count = n;
for (const [member, _] of map) {
	if (count > 0) {
		answer.push(member);
		count--;
	}
}
console.log(answer.join("\n"));
