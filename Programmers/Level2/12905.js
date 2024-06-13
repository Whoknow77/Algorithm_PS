function solution(board) {
	let row = board.length
	let column = board[0].length
	if (row <= 1 || column <= 1) return 1
	let answerLength = 0
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < column; j++) {
			if (board[i][j] >= 1) {
				let cross = board[i - 1][j - 1]
				let up = board[i - 1][j]
				let left = board[i][j - 1]

				board[i][j] = Math.min(cross, up, left) + 1

				answerLength = Math.max(answerLength, board[i][j])
			}
		}
	}
	return answerLength ** 2
}

console.log(
	solution([
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
	])
)
