const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, p, q] = input[0].split(" ").map(Number);
const visited = Array(BigInt(n)).fill(0);
visited[0] = 1;

const f = (input) => {
	if (visited[input]) {
		return visited[input];
	} else {
		const target = f(Math.floor(input / p)) + f(Math.floor(input / q));
		visited[input] = target;
		return target;
	}
};
console.log(f(n));
