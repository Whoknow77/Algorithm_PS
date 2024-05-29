// function solution(board) {
// 	let answer = 0
// 	let dx = [-1, 0, 1, 0]
// 	let dy = [0, 1, 0, -1]
// 	function DFS(x, y) {
// 		// 도착
// 		if (x === 6 && y === 6) answer++
// 		else {
// 			for (let i = 0; i < 4; i++) {
// 				let nx = x + dx[i]
// 				let ny = y + dy[i]
// 				// 범위 안에 있고 갈 수 있는 곳일 경우
// 				if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
// 					board[nx][ny] = 1 // 방문 체크
// 					DFS(nx, ny)
// 					board[nx][ny] = 0
// 					// 밟은 길은 1, 돌아올때 0
// 				}
// 			}
// 		}
// 	}
// 	board[0][0] = 1
// 	DFS(0, 0)
// 	return answer
// }
const solution = (arr) => {
	const n = arr.length
	const dx = [-1, 0, 1, 0]
	const dy = [0, 1, 0, -1]
	arr[0][0] = 1
	let answer = 0
	const dfs = (x, y) => {
		if (x === n - 1 && y === n - 1) {
			answer += 1
		} else {
			for (let i = 0; i < 4; i++) {
				const nx = dx[i] + x
				const ny = dy[i] + y
				if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] === 1) {
					continue
				} else {
					arr[nx][ny] = 1
					dfs(nx, ny)
					arr[nx][ny] = 0
				}
			}
		}
	}
	dfs(0, 0)
	return answer
}

let arr = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 0, 0],
]
console.log(solution(arr))
