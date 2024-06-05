dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
function solution(maps) {
	const n = maps.length
	const m = maps[0].length
	const arr = []
	for (let i = 0; i < n; i++) {
		arr.push(maps[i].split(""))
	}
	let start
	let end
	let leber

	for (let x = 0; x < n; x++) {
		for (let y = 0; y < m; y++) {
			if (maps[x][y] === "S") {
				start = [x, y]
			}
			if (maps[x][y] === "E") {
				end = [x, y]
			}
			if (maps[x][y] === "L") {
				leber = [x, y]
			}
		}
	}

	const bfs = (startX, startY, target) => {
		const queue = [[startX, startY, 0]]
		let visited = Array.from({length: n}, () => Array(m).fill(0))
		visited[startX][startY] = 1
		while (queue.length > 0) {
			const [curX, curY, curCount] = queue.shift()
			if (arr[curX][curY] === target) {
				return curCount
			}
			for (let i = 0; i < 4; i++) {
				const nx = curX + dx[i]
				const ny = curY + dy[i]
				if (
					nx >= 0 &&
					nx <= n - 1 &&
					ny >= 0 &&
					ny <= m - 1 &&
					!visited[nx][ny] &&
					arr[nx][ny] !== "X"
				) {
					visited[nx][ny] = 1
					queue.push([nx, ny, curCount + 1])
				}
			}
		}
		return -1
	}

	const leberFlag = bfs(start[0], start[1], "L")
	if (!leber || leberFlag === -1) {
		return -1
	}
	const answer = bfs(leber[0], leber[1], "E")
	return answer > 0 ? leberFlag + answer : -1
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]))
