const solution = (m, n, board) => {
	let reverseBoard = []
	for (let i = 0; i < n; i++) {
		const temp = []
		for (let j = 0; j < m; j++) {
			temp.push(board[j][i])
		}
		reverseBoard.push(temp.reverse())
	}
	let count = 0
	while (true) {
		let flag = false
		const set = new Set()
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < m - 1; j++) {
				// 전체 돌면서 지울애들의 위치를 set에 넣는다.
				if (
					reverseBoard[i][j] &&
					reverseBoard[i][j].charCodeAt() >= 65 &&
					reverseBoard[i][j].charCodeAt() <= 90 &&
					reverseBoard[i][j] === reverseBoard[i][j + 1] &&
					reverseBoard[i][j] === reverseBoard[i + 1][j] &&
					reverseBoard[i][j] === reverseBoard[i + 1][j + 1]
				) {
					set.add(`${[i, j]}`)
					set.add(`${[i + 1, j]}`)
					set.add(`${[i, j + 1]}`)
					set.add(`${[i + 1, j + 1]}`)
					flag = true
				}
			}
		}
		if (!flag) {
			break
		} else {
			set.forEach((item) => {
				const [x, y] = item.split(",")
				reverseBoard[x][y] = 0
				count += 1
			})
			reverseBoard = reverseBoard.map((row) => {
				return row.filter((item) => {
					return item !== 0
				})
			})
		}
	}
	return count
}

// 다른 풀이
function solution(m, n, board) {
	board = board.map((v) => v.split(""))

	while (true) {
		let founded = []

		// 찾기
		for (let i = 1; i < m; i++) {
			for (let j = 1; j < n; j++) {
				if (
					board[i][j] &&
					board[i][j] === board[i][j - 1] &&
					board[i][j] === board[i - 1][j - 1] &&
					board[i][j] === board[i - 1][j]
				) {
					founded.push([i, j])
				}
			}
		}

		if (!founded.length) return [].concat(...board).filter((v) => !v).length

		founded.forEach((a) => {
			board[a[0]][a[1]] = 0
			board[a[0]][a[1] - 1] = 0
			board[a[0] - 1][a[1] - 1] = 0
			board[a[0] - 1][a[1]] = 0
		})
		// 재정렬
		for (let i = m - 1; i > 0; i--) {
			if (!board[i].some((v) => !v)) continue

			// 하나라도 0이 있는경우에 열을 체크해서 0과 자리바꾼다.
			for (let j = 0; j < n; j++) {
				for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
					if (board[k][j]) {
						board[i][j] = board[k][j]
						board[k][j] = 0
						console.log(board)
						break
					}
				}
			}
		}
	}
}

console.log(solution(4, 4, ["ABCD", "BACE", "BCDD", "BCDD"]))

// ABCD
// BACE
// BCDD
// BCDD
