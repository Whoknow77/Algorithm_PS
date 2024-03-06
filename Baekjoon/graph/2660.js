const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(" ").map(Number);
	if (a === -1 && b === -1) {
		break;
	}
	arr[a].push(b);
	arr[b].push(a);
}

const bacon = new Array(n + 1).fill(0);

const bfs = (start) => {
	const visited = new Array(n + 1).fill(0);
	const queue = [[start, 0]];
	while (queue.length) {
		let [node, depth] = queue.shift();
		if (!visited[node]) {
			visited[node] = 1;
			bacon[start] = depth;
			for (const cur of arr[node]) {
				if (!visited[cur]) {
					queue.push([cur, depth + 1]);
				}
			}
		}
	}
};

for (let i = 1; i <= n; i++) {
	bfs(i);
}

bacon.shift();
const score = Math.min(...bacon);
const candidate = bacon
	.map((can, idx) => (can === score ? idx + 1 : null))
	.filter((item) => +item);
console.log(score, candidate.length);
console.log(candidate.sort((a, b) => a - b).join(" "));

// bfs를 돌면서 누적된 count 중 가장 큰값이 점수가 됨
