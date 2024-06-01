function solution(storey) {
	const arr = [0, ...[...(storey + "")].map(Number)]

	for (let i = arr.length - 1; i > 0; i--) {
		if (arr[i] < 5) {
			continue
		} else if (arr[i] === 5 && arr[i - 1] < 5) {
			continue
		}
		arr[i] = 10 - arr[i]
		arr[i - 1] += 1
	}
	return arr.reduce((a, b) => a + b, 0)
}

console.log(solution(16))
