function solution(n, a, b) {
	let ton = Array.from({length: n}, (v, i) => i + 1)
	let count = 1
	while (true) {
		let winner = []
		for (let i = 0; i < ton.length; i += 2) {
			const fight = ton.slice(i, i + 2)
			if (
				(fight[0] === a && fight[1] === b) ||
				(fight[0] === b && fight[1] === a)
			) {
				return count
			} else {
				if (fight[0] === a || fight[0] === b) {
					winner.push(fight[0])
				} else if (fight[1] === a || fight[1] === b) {
					winner.push(fight[1])
				} else {
					winner.push(fight[0])
				}
			}
		}
		count++
		ton = [...winner]
	}
}

function solution(n, a, b) {
	let answer = 0
	while (a !== b) {
		a
		b
		a = Math.ceil(a / 2)
		b = Math.ceil(b / 2)
		answer++
	}

	return answer
}

const solution2 = (n, a, b) => {
	let round = 1
	while (true) {
		a = Math.ceil(a / 2)
		b = Math.ceil(b / 2)
		if (a === b) {
			return round
		}
		round += 1
	}
}

console.log(solution2(8, 4, 7))

// 1 2 3 4 5 6 7 8
// 1 4 6 7 각각 1,3
// 4 7
