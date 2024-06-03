function solution(dirs) {
	let curX = 0
	let curY = 0
	const set = new Set()
	for (let i = 0; i < dirs.length; i++) {
		if (dirs[i] === "L") {
			if (curX - 1 < -5 || curX - 1 > 5 || curY < -5 || curY > 5) {
				continue
			}
			set.add(`${[curX, curY, curX - 1, curY]}`)
			set.add(`${[curX - 1, curY, curX, curY]}`)
			curX -= 1
		}
		if (dirs[i] === "R") {
			if (curX + 1 < -5 || curX + 1 > 5 || curY < -5 || curY > 5) {
				continue
			}
			set.add(`${[curX, curY, curX + 1, curY]}`)
			set.add(`${[curX + 1, curY, curX, curY]}`)
			curX += 1
		}
		if (dirs[i] === "U") {
			if (curX < -5 || curX > 5 || curY - 1 < -5 || curY - 1 > 5) {
				continue
			}
			set.add(`${[curX, curY, curX, curY - 1]}`)
			set.add(`${[curX, curY - 1, curX, curY]}`)
			curY -= 1
		}
		if (dirs[i] === "D") {
			if (curX < -5 || curX > 5 || curY + 1 < -5 || curY + 1 > 5) {
				continue
			}
			set.add(`${[curX, curY, curX, curY + 1]}`)
			set.add(`${[curX, curY + 1, curX, curY]}`)
			curY += 1
		}
	}
	return set.size / 2
}

console.log(solution("LLLLLRRRRR"))
