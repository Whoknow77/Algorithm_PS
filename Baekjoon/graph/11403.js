const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr2 = [];
for (let i = 0; i < n; i++) {
	const inputarr = input[i].split(" ").map(Number);
	arr2.push(inputarr);
}

const dfs = (node, start, visited) => {
	for (let i = 0; i < n; i++) {
		if (!visited[i] && arr2[node][i]) {
			visited[i] = 1;
			arr2[start][i] = 1;
			dfs(i, start);
		}
	}
};

for (let i = 0; i < n; i++) {
	const visited = Array(n).fill(0);
	dfs(i, i, visited);
}
console.log(arr2);
