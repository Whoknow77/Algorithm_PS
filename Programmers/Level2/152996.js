function solution(weights) {
	let answer = 0
	const store = {}
	const cal = [1, 3 / 2, 2, 4 / 3] //경우의 수 (1,1), (2,3), (2,4), (3,4)

	weights
		.sort((a, b) => b - a)
		.forEach((w) => {
			//내림차순 정렬 후, 전체 돌면서
			let s
			cal.forEach((i) => {
				if (((s = w * i), store[s])) {
					//해당 비율을 곱한 값이 store에 존재할 경우
					answer += store[s]
				}
			})
			if (!store[w]) store[w] = 1
			else store[w]++
		})
	return answer
}

console.log(solution([100, 180, 360, 100, 270, 100]))
// 1 3
// 360 1
// 270 1
// 180
// 100
// 100
// 100
