// function solution(order) {
// 	const bozoBelt = []
// 	const belt = Array.from(Array(order.length), (_, i) => order.length - i)
// 	let count = 0
// 	let flag = false
// 	for (let i = 0; i < order.length; i++) {
// 		// 벨트 맨 앞에 있는 상자가 택배 기사가 원하는 상자일때까지 보조 상자에 넣기
// 		if (flag === false) {
// 			const targetBox = order[i]
// 			while (true) {
// 				// 순서가 맞는 경우(벨트의 맨 뒤)
// 				if (belt.at(-1) === targetBox) {
// 					count += 1
// 					belt.pop()
// 					break
// 				}
// 				// 순서가 맞지 않는 경우
// 				if (bozoBelt.at(-1) === targetBox) {
// 					// 보조 벨트의 맨 앞 상자랑 일치하는 경우
// 					bozoBelt.pop()
// 					count += 1
// 					break
// 				}
// 				// 보조 벨트의 맨 앞 상자랑 일치하지 않는 경우
// 				else {
// 					// 순서 맞추기가 불가능한 경우
// 					if (belt.length === 0) {
// 						flag = true
// 						break
// 					} else {
// 						bozoBelt.push(belt.pop())
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return count
// }

// 다른 풀이

function solution(order) {
	let truck = 0
	let main_trail_index = 1

	const sub_trail = []

	for (const o of order) {
		while (main_trail_index <= o) {
			sub_trail.push(main_trail_index++)
		}
		if (sub_trail.at(-1) !== o) break
		sub_trail.pop()
		truck++
	}
	return truck
}
// 다른 풀이

function solution(order) {
	let result = 0
	const stack = []

	for (let i = 1; i <= order.length; i++) {
		stack.push(i)

		// 스택의 상자 번호가 주어진 순서와 일치하는지 확인
		while (stack.length !== 0 && stack.at(-1) === order[result]) {
			stack.pop() // 일치하는 상자 번호는 스택에서 제거
			result++
		}
	}

	return result
}
console.log(solution([4, 3, 1, 2, 5]))
