function solution(times) {
	let answer = Number.MIN_SAFE_INTEGER
	let T_line = []

	for (let x of times) {
		T_line.push([x[0], "s"])
		T_line.push([x[1], "e"])
	}

	T_line.sort((a, b) => {
		if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
		// 시작 시간순으로 정렬하고, 같으면 e가 앞에오도록
		else return a[0] - b[0]
	})
	let cnt = 0
	for (let x of T_line) {
		if (x[1] === "s") cnt++
		else cnt--
		answer = Math.max(answer, cnt)
	}
	return answer
}

let arr = [
	[14, 18],
	[12, 15],
	[15, 20],
	[20, 30],
	[5, 14],
]
console.log(solution(arr))

// 5 14
// 9 17
// 7 20
// 6 22
