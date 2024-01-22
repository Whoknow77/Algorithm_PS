function solution(maps) {
	const dx = [-1, 0, 0, 1];
	const dy = [0, 1, -1, 0];
	const N = maps.length;
	const M = maps[0].length;
	const visited = Array.from(Array(N), () => Array(M).fill(0));

	const queue = [[0, 0, 1]]; // 위치, count
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [curX, curY, count] = queue.shift();
			x``;
			for (let j = 0; j < 4; j++) {
				const nx = dx[j] + curX;
				const ny = dy[j] + curY;

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx <= N - 1 &&
					ny <= M - 1 &&
					!visited[nx][ny] &&
					maps[nx][ny]
				) {
					if (nx === N - 1 && ny === M - 1) {
						return count + 1;
					}
					visited[nx][ny] = 1;
					queue.push([nx, ny, count + 1]);
				}
			}
		}
	}
	return -1;
}

console.log(
	solution([
		[1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1],
		[1, 1, 1, 0, 1],
		[0, 0, 0, 0, 1],
	])
);
// [0,0]에서 [n-1, m-1]까지
