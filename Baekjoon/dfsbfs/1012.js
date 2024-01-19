const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [T] = input.shift().split(" ").map(Number); // 테스트 케이스 수
const answer = [];

function bfs(x, y, M, N, arr, visited) {
	count = 0;
	const queue = [[x, y]];
	// 이미 방문한 곳이라면 리턴
	if (visited[x][y] === 1) {
		return count;
	}
	visited[x][y] = 1;
	count++;
	const dx = [0, 0, -1, 1];
	const dy = [-1, 1, 0, 0];
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const coord = queue.shift();
			// 네 방향조사
			for (let j = 0; j < 4; j++) {
				const nx = coord[0] + dx[j];
				const ny = coord[1] + dy[j];

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < N &&
					ny < M &&
					!visited[nx][ny] &&
					arr[nx][ny] === 1
				) {
					visited[nx][ny] = 1;
					queue.push([nx, ny]);
				}
			}
		}
	}

	return count;
}

for (k = 0; k < T; k++) {
	const baechuArr = [];
	const [M, N, K] = input.shift().split(" ").map(Number); // 가로길이, 세로길이, 심은 배추 개수'
	const arr = Array.from(Array(N), () => Array(M).fill(0));
	const visited = Array.from(Array(N), () => Array(M).fill(0));
	for (let z = 0; z < K; z++) {
		const [A, B] = input.shift().split(" ").map(Number);
		arr[B][A] = 1;
		baechuArr.push([B, A]);
	}

	let count = 0;
	while (baechuArr.length > 0) {
		const [B, A] = baechuArr.pop();
		count += bfs(B, A, M, N, arr, visited);
	}
	answer.push(count);
}
console.log(answer.join("\n"));
