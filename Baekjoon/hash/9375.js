const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
if (n === 0) {
	console.log(0);
	return;
}
const answer = [];
for (let i = 0; i < n; i++) {
	const m = +input.shift();
	const map = new Map();
	for (let j = 0; j < m; j++) {
		const [item, category] = input.shift().trim().split(" ");
		if (map.get(category)) {
			map.set(category, [...map.get(category), item]);
		} else {
			map.set(category, [item]);
		}
	}
	let cas = 1;
	for (const [_, item] of map) {
		cas *= item.length + 1;
	}
	answer.push(cas - 1);
}

console.log(answer.join("\n"));
