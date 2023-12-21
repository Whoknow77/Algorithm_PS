const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift()); // 사람 수
const [M, K] = input.shift().split(" ").map(Number); // 타겟1 타겟2
const repeatNumber = Number(input.shift());
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const visited = [...new Array(N + 1)].map((_, i) => 0);

for (let i = 0; i < repeatNumber; i++) {
	const [from, to] = input[i].split(" ").map(Number);
	graph[from][to] = 1;
	graph[to][from] = 1;
}

const BFS = (M, K) => {
	// M부터 시작
	const queue = [];
	visited[M] = 1;
	queue.push([M, 0]);
	// 주위 순회
	while (queue.length) {
		const [cur, depth] = queue.shift();
		if (cur === K) {
			return depth;
		}
		for (let i = 1; i <= N; i++) {
			if (graph[cur][i] === 1 && visited[i] !== 1) {
				visited[i] = 1;
				queue.push([i, depth + 1]);
			}
		}
	}
	return -1;
};

console.log(BFS(M, K));

// depth를 기록해야함
