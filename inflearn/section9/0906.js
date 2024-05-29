// function solution(board) {
// 	let answer = 0
// 	let n = board.length
// 	let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
// 	let dy = [0, 1, 1, 1, 0, -1, -1, -1]
// 	function DFS(x, y) {
// 		board[x][y] = 0
// 		for (let i = 0; i < 8; i++) {
// 			let nx = x + dx[i]
// 			let ny = y + dy[i]
// 			if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
// 				DFS(nx, ny)
// 			}
// 		}
// 	}

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			if (board[i][j] === 1) {
// 				// board[i][j]=0;
// 				answer++
// 				DFS(i, j)
// 			}
// 		}
// 	}
// 	return answer
// }

const dx = [-1, 0, 1, 0, -1, 1, 1, -1]
const dy = [0, 1, 0, -1, 1, 1 - 1, -1]

const solution = (arr) => {
	const n = arr.length
	let answer = 0
	const dfs = (x, y) => {
		console.log(x, y)
		for (let i = 0; i < 8; i++) {
			const nx = x + dx[i]
			const ny = y + dy[i]
			if (
				nx >= 0 &&
				ny >= 0 &&
				nx <= n - 1 &&
				ny <= n - 1 &&
				arr[nx][ny] === 1
			) {
				arr[nx][ny] = 0
				dfs(nx, ny)
			}
		}
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] === 1) {
				arr[i][j] = 0
				dfs(i, j)
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
