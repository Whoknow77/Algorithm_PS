function solution(diffs, times, limit) {
	function calcTime(level) {
		let totalTime = 0
		let prevTime = 0
		for (let i = 0; i < diffs.length; i++) {
			const curDiff = diffs[i]
			const curTime = times[i]
			if (curDiff <= level) {
				totalTime += curTime
			} else {
				totalTime += (curDiff - level) * (curTime + prevTime) + curTime
			}
			prevTime = curTime
		}
		return totalTime <= limit
	}

	let left = Number.MAX_SAFE_INTEGER
	let right = Number.MIN_SAFE_INTEGER
	diffs.forEach((v) => {
		left = Math.min(v, left)
		right = Math.max(v, right)
	})

	let middle = 0
	while (left <= right) {
		middle = parseInt((left + right) / 2)
		if (calcTime(middle)) {
			// 숙련도 만족 -> 더 내려도 됨
			right = middle - 1
		} else {
			// 숙련도 불만족 -> 올려야함
			left = middle + 1
		}
	}
	return left
}

solution([1, 5, 3], [2, 4, 7], 30)
// 이분 탐색

// 1 2 3 4 5
