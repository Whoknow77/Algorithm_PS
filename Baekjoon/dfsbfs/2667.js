const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const graph = input.map((row) => row.split("").map(Number).slice(0, N));

function bfs(x, y, count) {
	let dx = [0, 0, -1, 1];
	let dy = [-1, 1, 0, 0];
	const queue = [[x, y]];
	visited[[x, y]] = 1;

	// 주변 순회
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [x, y] = queue.shift();
			// 네 방향조사
			for (let j = 0; j < 4; j++) {
				let nx = x + dx[j];
				let ny = y + dy[j];

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < N &&
					ny < N &&
					!visited[[nx, ny]] &&
					graph[nx][ny] === 1
				) {
					visited[[nx, ny]] = 1; // 방문
					count++;
					queue.push([nx, ny]);
				}
			}
		}
	}
	// 순회된 덩어리만 반환
	return count;
}

let answer = [];
const visited = [];
let danji = 0;

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (graph[i][j] === 1 && visited[[i, j]] !== 1) {
			answer.push(bfs(i, j, 1));
			danji++;
		}
	}
}

answer = [danji, ...answer.sort((a, b) => a - b)];
console.log(answer.join("\n"));
