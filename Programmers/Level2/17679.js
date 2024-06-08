function solution(m, n, board) {
	let arr = board.map((row) => row.split(""))
	let count = 0
	while (1) {
		let flag = false
		const removeSet = new Set()
		// 반복문을 돌면서 자신,오른쪽,아래,오른쪽아래를 탐색하면서 모두 같으면 네개의 인덱스를 배열에 넣는다.
		for (let i = 0; i < m - 1; i++) {
			for (let j = 0; j < n - 1; j++) {
				const target1 = arr[i][j]
				const target2 = arr[i + 1][j]
				const target3 = arr[i][j + 1]
				const target4 = arr[i + 1][j + 1]
				if (target1 === target2 && target2 === target3 && target3 === target4) {
					if (
						target1 !== 0 &&
						target2 !== 0 &&
						target3 !== 0 &&
						target4 !== 0
					) {
						removeSet.add(`${[i, j]}`)
						removeSet.add(`${[i + 1, j]}`)
						removeSet.add(`${[i, j + 1]}`)
						removeSet.add(`${[i + 1, j + 1]}`)
						flag = true
					}
				}
			}
		}
		if (flag === false) {
			break
		}

		removeSet.forEach((item) => {
			const [x, y] = item.split(",")
			arr[x][y] = 1
			count += 1
		})

		const newArr = []
		for (let i = 0; i < n; i++) {
			const subarr = []
			let cnt = 0
			for (let j = 0; j < m; j++) {
				if (arr[j][i] !== 1) {
					subarr.push(arr[j][i])
				} else {
					cnt += 1
				}
			}
			const zero = Array(cnt).fill(0)
			newArr.push([...zero, ...subarr])
		}
		const newwArr = []
		for (let i = 0; i < m; i++) {
			const subarr = []
			for (let j = 0; j < n; j++) {
				subarr.push(newArr[j][i])
			}
			newwArr.push(subarr)
		}
		arr = newwArr.map((v) => [...v])
	}

	return count
}

// // 다른 풀이
// function solution(m, n, board) {
// 	board = board.map((v) => v.split(""))

// 	while (true) {
// 		let founded = []

// 		// 찾기
// 		for (let i = 1; i < m; i++) {
// 			for (let j = 1; j < n; j++) {
// 				if (
// 					board[i][j] &&
// 					board[i][j] === board[i][j - 1] &&
// 					board[i][j] === board[i - 1][j - 1] &&
// 					board[i][j] === board[i - 1][j]
// 				) {
// 					founded.push([i, j])
// 				}
// 			}
// 		}

// 		if (!founded.length) return [].concat(...board).filter((v) => !v).length

// 		founded.forEach((a) => {
// 			board[a[0]][a[1]] = 0
// 			board[a[0]][a[1] - 1] = 0
// 			board[a[0] - 1][a[1] - 1] = 0
// 			board[a[0] - 1][a[1]] = 0
// 		})
// 		// 재정렬
// 		for (let i = m - 1; i > 0; i--) {
// 			if (!board[i].some((v) => !v)) continue

// 			// 하나라도 0이 있는경우에 열을 체크해서 0과 자리바꾼다.
// 			for (let j = 0; j < n; j++) {
// 				for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
// 					if (board[k][j]) {
// 						board[i][j] = board[k][j]
// 						board[k][j] = 0
// 						console.log(board)
// 						break
// 					}
// 				}
// 			}
// 		}
// 	}
// }

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))
