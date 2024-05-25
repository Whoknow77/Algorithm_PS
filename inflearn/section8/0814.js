const solution = (n, m) => {
	const answer = []
	const tmp = Array(m).fill(0)
	const dfs = (cur_idx, cur_length) => {
		if (cur_length === m) {
			answer.push(tmp.slice())
		} else {
			for (let i = cur_idx; i <= n; i++) {
				tmp[cur_length] = i
				dfs(i + 1, cur_length + 1)
			}
		}
	}
	dfs(1, 0)
	return answer
}
console.log(solution(4, 2))
