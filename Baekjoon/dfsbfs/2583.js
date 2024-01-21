const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, K] = input.shift().split(" ").map(Number);
const arr = Array.from(Array(M), () => Array(N).fill(0));
const visited = Array.from(Array(M), () => Array(N).fill(0));
const dx = [-1, 0, 0, 1];
const dy = [0, 1, -1, 0];
const answer = [];
const fresh = [];
let count = 0;

for (let i = 0; i < K; i++) {
	const [leftX, leftY, rightX, rightY] = input[i].split(" ").map(Number);
	for (let j = leftY; j < rightY; j++) {
		for (let z = leftX; z < rightX; z++) {
			arr[j][z] = 1; // 색칠
		}
	}
}

for (let i = 0; i < M; i++) {
	for (let j = 0; j < N; j++) {
		if (!arr[i][j]) {
			fresh.push([i, j]);
		}
	}
}

function bfs(freshX, freshY) {
	let sum = 1;
	visited[freshX][freshY] = 1;
	const queue = [[freshX, freshY, 0]];
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [curX, curY, innerCount] = queue.shift();
			for (let j = 0; j < 4; j++) {
				const nx = dx[j] + curX;
				const ny = dy[j] + curY;

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx <= M - 1 &&
					ny <= N - 1 &&
					!visited[nx][ny] &&
					!arr[nx][ny]
				) {
					sum++;
					visited[nx][ny] = 1;
					queue.push([nx, ny, innerCount + 1]);
				}
			}
		}
	}
	return [sum, 1];
}

while (fresh.length) {
	const [freshX, freshY] = fresh.pop();
	if (!visited[freshX][freshY]) {
		const [pictureSum, lump] = bfs(freshX, freshY);
		count += lump; // 0이나 1임
		answer.push(pictureSum);
	}
}
console.log(count);
console.log(answer.sort((a, b) => a - b).join(" "));
