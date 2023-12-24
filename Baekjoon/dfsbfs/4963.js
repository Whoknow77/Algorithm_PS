const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const dx = [0, 0, 1, -1, 1, -1, 1, -1];
const dy = [-1, 1, 0, 0, 1, 1, -1, -1];
let idx = 1;
const answer = [];

const bfs = (x, y, M, K, graph, visited) => {
	const queue = [[x, y]];
	visited[x][y] = 1;
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [x, y] = queue.shift();
			for (let j = 0; j < 8; j++) {
				const nx = x + dx[j];
				const ny = y + dy[j];

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < K &&
					ny < M &&
					!visited[nx][ny] &&
					graph[nx][ny] === 1
				) {
					visited[nx][ny] = 1;
					queue.push([nx, ny]);
				}
			}
		}
	}
};

const calc = (M, K, graph, visited) => {
	let count = 0;
	for (let i = 0; i < K; i++) {
		for (let j = 0; j < M; j++) {
			if (graph[i][j] === 1 && visited[i][j] !== 1) {
				bfs(i, j, M, K, graph, visited);
				count++;
			}
		}
	}
	console.log(count);
};

for (let i = 0; i < input.length; i += idx) {
	const [M, K] = input[i].split(" ").map(Number);
	if (M === 0 && K === 0) {
		return;
	} else {
		idx = K + 1;
		const arr = input.slice(i + 1, i + 1 + K);
		const graph = [];
		const visited = Array.from(Array(K), () => Array(M).fill(0));
		for (let j = 0; j < arr.length; j++) {
			const temp = arr[j].split(" ").map(Number);
			graph.push(temp);
		}
		calc(M, K, graph, visited);
	}
}

console.log(answer);

// 시간 초과 안나는 이유..? 시간복잡도 쓰레기인 것 같음
