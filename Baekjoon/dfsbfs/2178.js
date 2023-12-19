const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

function bfs(x, y) {
	const queue = [[x, y]];
	const result = [];
	const visited = {};
	visited[[x, y]] = 1;
	let dx = [0, 0, -1, 1];
	let dy = [-1, 1, 0, 0];
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			let coord = queue.shift();
			result.push(coord);
			// 네 방향조사
			for (let j = 0; j < 4; j++) {
				let nx = coord[0] + dx[j];
				let ny = coord[1] + dy[j];

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < N &&
					ny < M &&
					!visited[[nx, ny]] &&
					map[nx][ny] === 1
				) {
					visited[[nx, ny]] = visited[coord] + 1;
					queue.push([nx, ny]);
				}
			}
		}
	}
	console.log(visited);

	return visited[[N - 1, M - 1]];
}

console.log(bfs(0, 0));
