function solution(topping) {
	const map = new Map()
	const bro = new Set()

	let answer = 0

	for (let i = 0; i < topping.length; i++) {
		if (map.has(topping[i])) {
			map.set(topping[i], map.get(topping[i]) + 1)
		} else {
			map.set(topping[i], 1)
		}
	}

	for (let i = 0; i < topping.length; i++) {
		let count = map.get(topping[i]) - 1
		bro.add(topping[i])

		if (count === 0) {
			map.delete(topping[i])
		} else {
			map.set(topping[i], count)
		}
		console.log(bro, map)

		if (bro.size === map.size) {
			answer += 1
		}
	}
	return answer
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))
