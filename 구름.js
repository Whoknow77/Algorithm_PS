dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

const bfs = (x, y, N, visited, arr) => {
	const queue = [[x, y, N, visited, arr]]
	let count = 0
	while (queue.length > 0) {
		;[curX, curY, N, visited, arr] = queue.shift()
		for (let i = 0; i < 4; i++) {
			nx = dx[i] + curX
			ny = dy[i] + curY
			if (
				nx >= 0 &&
				nx <= N - 1 &&
				ny >= 0 &&
				ny <= N - 1 &&
				visited[nx][ny] === 0 &&
				arr[nx][ny] == 1
			) {
				queue.push([nx, ny, N, visited, arr])
				visited[nx][ny] = 1
				count += 1
			}
		}
	}
	return count
}
const Solution = (N, arr) => {
	const visited = Array.from(Array(N), () => Array(N).fill(0))
	let answer = 0
	const answerArr = []
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (visited[i][j] == 0 && arr[i][j] == 1) {
				answerArr.push(bfs(i, j, N, visited, arr))
				answer += 1
			}
		}
	}
	answerArr.sort()
	console.log(answer)
	console.log(answerArr.join(" "))
}
const readline = require("readline")

;(async () => {
	let rl = readline.createInterface({input: process.stdin})
	let N = null
	const arr = []
	for await (const line of rl) {
		if (!line) {
			rl.close()
		}
		if (!N) {
			N = +line
		} else {
			arr.push(line.split(" ").map((el) => +el))
		}
	}

	Solution(N, arr)

	process.exit()
})()
