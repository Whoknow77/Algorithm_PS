function solution(board) {
	let answer = 0
	let n = board.length
	let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
	let dy = [0, 1, 1, 1, 0, -1, -1, -1]
	let queue = []
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 1) {
				board[i][j] = 0
				queue.push([i, j])
				answer++
				while (queue.length) {
					let [x, y] = queue.shift()
					for (let k = 0; k < 8; k++) {
						let nx = x + dx[k]
						let ny = y + dy[k]
						if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
							board[nx][ny] = 0
							queue.push([nx, ny])
						}
					}
				}
			}
		}
	}

	return answer
}

const dx = [-1, 0, 1, 0, -1, 1, 1, -1]
const dy = [0, 1, 0, -1, 1, 1 - 1, -1]
const solution = (arr) => {
	const n = arr.length
	let answer = 0
	const bfs = (x, y) => {
		const queue = [[x, y]]
		while (queue.length > 0) {
			const [curX, curY] = queue.shift()
			for (let i = 0; i < 8; i++) {
				nx = curX + dx[i]
				ny = curY + dy[i]
				if (
					nx >= 0 &&
					nx <= n - 1 &&
					ny >= 0 &&
					ny <= n - 1 &&
					arr[nx][ny] === 1
				) {
					arr[nx][ny] = 0
					queue.push([nx, ny])
				}
			}
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] === 1) {
				arr[i][j] = 0
				bfs(i, j)
				answer += 1
			}
		}
	}
	return answer
}

let arr = [
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
]

console.log(solution(arr))
