const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
	const [from, to] = input[i].split(" ").map(Number);
	graph[from][to] = 1;
	graph[to][from] = 1;
}

const visited = new Array(N + 1).fill(false);
const answer = [];
const DFS = (v) => {
	visited[v] = true;
	answer.push(v);
	for (let i = 1; i < graph.length; i++) {
		if (graph[v][i] === 1 && visited[i] === false) {
			DFS(i);
		}
	}
};

DFS(1);

console.log(answer.length - 1);
