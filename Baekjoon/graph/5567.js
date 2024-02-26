const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const m = Number(input.shift());
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(" ").map(Number);
	graph[a].push(b);
	graph[b].push(a);
}

const visited = Array(n + 1).fill(0);
visited[1] = 1;

let answer = 0;
const bfs = (start, depth) => {
	const queue = [[start, depth]];
	while (queue.length) {
		const [cur, depth] = queue.shift();
		for (const target of graph[cur]) {
			if (!visited[target]) {
				visited[target] = 1;
				if (depth >= 0 && depth < 2) {
					answer++;
				}
				queue.push([target, depth + 1]);
			}
		}
	}
};

bfs(1, 0);
console.log(answer);
