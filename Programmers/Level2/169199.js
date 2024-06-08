const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]
function solution(board) {
	const m = board.length
	const n = board[0].length
	let startX
	let startY
	board = board.map((v) => [...v])
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === "R") {
				startX = i
				startY = j
			}
			if (board[i][j] === "G") {
				endX = i
				endY = j
			}
		}
	}

	const visited = Array.from(Array(m), () => Array(n).fill(0))
	const bfs = (x, y) => {
		const queue = [[x, y, 0]]
		while (queue.length > 0) {
			const [curX, curY, count] = queue.shift()
			for (let i = 0; i < 4; i++) {
				let nx = dx[i] + curX
				let ny = dy[i] + curY
				while (
					nx >= 0 &&
					nx <= m - 1 &&
					ny >= 0 &&
					ny <= n - 1 &&
					board[nx][ny] !== "D"
				) {
					nx += dx[i]
					ny += dy[i]
				}
				nx -= dx[i]
				ny -= dy[i]
				if (board[nx][ny] === "G") {
					return count + 1
				} else if (visited[nx][ny] === 0) {
					visited[nx][ny] = 1
					queue.push([nx, ny, count + 1])
				}
			}
		}
		return -1
	}
	return bfs(startX, startY)
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]))
