const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input.shift().split(" ").map(Number);
const pictureArr = Array.from(Array(M), () => Array(N).fill(0));
const queueArr = [];
const visited = Array.from(Array(M), () => Array(N).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let maxCount = 0;
let count = 0;

for (let i = 0; i < M; i++) {
	const arr = input[i].split(" ").map(Number);
	for (let j = 0; j < N; j++) {
		pictureArr[i][j] = arr[j];
		if (pictureArr[i][j] === 1) {
			queueArr.push([i, j]);
		}
	}
}

function bfs(x, y) {
	let count = 0;
	let sum = 1;
	if (visited[x][y] === 1) {
		return [0, 1];
	}
	visited[x][y] = 1;
	count++;
	const que = [[x, y]];
	while (que.length > 0) {
		for (let i = 0; i < que.length; i++) {
			const [x, y] = que.shift();
			for (let j = 0; j < 4; j++) {
				const nx = dx[j] + x;
				const ny = dy[j] + y;
				if (
					nx >= 0 &&
					ny >= 0 &&
					nx <= M - 1 &&
					ny <= N - 1 &&
					!visited[nx][ny] &&
					pictureArr[nx][ny]
				) {
					visited[nx][ny] = 1;
					que.push([nx, ny]);
					sum++;
				}
			}
		}
	}
	return [count, sum];
}

while (queueArr.length > 0) {
	const [x, y] = queueArr.pop();
	const [c, sum] = bfs(x, y);
	count += c;

	maxCount = Math.max(sum, maxCount);
}

console.log(count);
console.log(maxCount);
