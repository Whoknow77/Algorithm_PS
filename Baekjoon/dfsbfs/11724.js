const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
	const [A, B] = input[i].split(" ").map(Number);
	graph[A].push(B);
	graph[B].push(A);
}

const visited = Array(n + 1).fill(0);

let answer = 0;

const dfs = (start) => {
	visited[start] = 1;
	for (const target of graph[start]) {
		if (!visited[target]) {
			visited[target] = 1;
			dfs(target);
		}
	}
};

for (let i = 1; i <= n; i++) {
	if (!visited[i]) {
		dfs(i);
		answer++;
	}
}

console.log(answer);
