const solution = (n, k, arr, m) => {
	let answer = 0
	const dfs = (cur_length, cur_idx, cur_sum) => {
		if (cur_length === k) {
			if (cur_sum % m === 0) {
				answer += 1
			}
		} else {
			for (let i = cur_idx; i < n; i++) {
				dfs(cur_length + 1, i + 1, cur_sum + arr[i])
			}
		}
	}

	dfs(0, 0, 0)
	return answer
}

let arr = [2, 4, 5, 8, 12]
console.log(solution(5, 3, arr, 6))
