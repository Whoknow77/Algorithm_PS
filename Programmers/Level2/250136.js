dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

function solution(land) {
	let max = 0
	const n = land.length
	const m = land[0].length
	let visited = Array.from(Array(n), () => Array(m).fill(0))
	const oilMap = new Map()
	let oilIndex = 1

	const bfs = (x, y) => {
		let count = 1
		const queue = [[x, y]]
		visited[x][y] = oilIndex
		while (queue.length) {
			const [curX, curY] = queue.shift()
			for (let i = 0; i < 4; i++) {
				const nx = dx[i] + curX
				const ny = dy[i] + curY
				if (
					nx >= 0 &&
					nx < n &&
					ny >= 0 &&
					ny < m &&
					land[nx][ny] &&
					!visited[nx][ny]
				) {
					queue.push([nx, ny])
					visited[nx][ny] = oilIndex
					count += 1
				}
			}
		}
		oilMap[oilIndex++] = count
		return count
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (!visited[i][j] && land[i][j] > 0) {
				bfs(i, j)
			}
		}
	}
	console.log(visited)

	for (let i = 0; i < m; i++) {
		let sum = 0
		const set = new Set()
		for (let j = 0; j < n; j++) {
			if (visited[j][i] !== 0) {
				set.add(visited[j][i])
			}
		}
		set.forEach((item) => {
			sum += oilMap[item]
		})

		max = Math.max(sum, max)
	}
	return max
}

console.log(
	solution([
		[0, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 1, 1, 0, 0],
		[1, 1, 0, 0, 0, 1, 1, 0],
		[1, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 0, 0, 0, 1, 1],
	])
)
