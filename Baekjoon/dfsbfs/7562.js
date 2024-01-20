const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
	const length = Number(input.shift());
	const [startX, startY] = input.shift().split(" ").map(Number);
	const [endX, endY] = input.shift().split(" ").map(Number);
	console.log(bfs(startX, startY, endX, endY, length));
}

function bfs(startX, startY, endX, endY, length) {
	if (startX === endX && startY === endY) {
		return 0;
	}
	const visited = Array.from(Array(length), () => Array(length).fill(0));
	const queue = [[startX, startY, 0]];
	while (queue.length > 0) {
		for (let i = 0; i < queue.length; i++) {
			const [curX, curY, count] = queue.shift();
			for (let j = 0; j < 8; j++) {
				const nx = dx[j] + curX;
				const ny = dy[j] + curY;
				if (nx === endX && ny === endY) {
					return count + 1;
				}
				if (
					nx >= 0 &&
					ny >= 0 &&
					nx <= length - 1 &&
					ny <= length - 1 &&
					!visited[nx][ny]
				) {
					visited[nx][ny] = 1;
					queue.push([nx, ny, count + 1]);
				}
			}
		}
	}
}
