function solution(s) {
	const answer = []
	for (let len = 1; len <= s.length / 2 + 1; len++) {
		let count = 1
		let sentence = ""
		for (let i = 0; i < s.length; i += len) {
			const curStr = s.slice(i, i + len)
			const nextStr = s.slice(i + len, i + len + len)
			if (curStr === nextStr) {
				count += 1
			} else {
				count = count === 1 ? "" : count
				sentence += `${count}${curStr}`
				count = 1
			}
		}
		answer.push(sentence.length)
	}
	return Math.min(...answer)
}

console.log(solution("ababcdcdababcdcd"))
