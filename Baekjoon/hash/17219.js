const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = new Map();
const answer = [];
for (let i = 0; i < n; i++) {
	const [site, password] = input[i].split(" ");
	map.set(site, password);
}

for (let i = 0; i < m; i++) {
	answer.push(map.get(input[n + i].trim()));
}
console.log(answer.join("\n"));
