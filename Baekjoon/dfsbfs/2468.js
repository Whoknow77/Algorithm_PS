const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const dx = [-1, 0, 0, 1];
const dy = [0, 1, -1, 0];
const arr = [];
let max = 0;
for (let i = 0; i < N; i++) {
	const r = input[i].split(" ").map(Number);
	max = Math.max(max, ...r);
	arr.push(r);
}
// 1부터 max까지 높이 모두 조사
let maxAnswer = 0;

function investigate(height) {
	const check = [];
	const water = Array.from(Array(N), () => Array(N).fill(0));
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (arr[i][j] <= height) {
				water[i][j] = 1;
			} else {
				check.push([i, j]);
			}
		}
	}
	let sum = 0;
	const visited = Array.from(Array(N), () => Array(N).fill(0));
	while (check.length > 0) {
		const [freshX, freshY] = check.pop();
		if (!visited[freshX][freshY]) {
			sum += bfs(freshX, freshY, visited, water);
		}
	}
	return sum;
}

function bfs(freshX, freshY, visited, water) {
	const queue = [[freshX, freshY]];
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [curX, curY] = queue.shift();
			for (let j = 0; j < 4; j++) {
				const nx = dx[j] + curX;
				const ny = dy[j] + curY;
				if (
					nx >= 0 &&
					ny >= 0 &&
					nx <= N - 1 &&
					ny <= N - 1 &&
					!water[nx][ny] &&
					!visited[nx][ny]
				) {
					visited[nx][ny] = 1;
					queue.push([nx, ny]);
				}
			}
		}
	}
	return 1;
}

for (let i = 0; i <= max; i++) {
	maxAnswer = Math.max(maxAnswer, investigate(i));
}
console.log(maxAnswer);
