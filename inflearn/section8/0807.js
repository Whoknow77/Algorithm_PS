// function solution(m, ps, pt) {
// 	let answer = Number.MIN_SAFE_INTEGER
// 	let n = ps.length
// 	function DFS(L, sum, time) {
// 		if (time > m) return

// 		if (L === n) {
// 			answer = Math.max(sum, answer)
// 		} else {
// 			DFS(L + 1, sum + ps[L], time + pt[L])
// 			DFS(L + 1, sum, time)
// 		}
// 	}

// 	DFS(0, 0, 0)
// 	return answer
// }

const solution = (m, score, time) => {
	let max_value = Number.MIN_SAFE_INTEGER
	const dfs = (cur, cur_score, cur_time) => {
		if (cur_time > m) {
			return
		}
		if (cur === score.length) {
			max_value = Math.max(max_value, cur_score)
		} else {
			dfs(cur + 1, cur_score + score[cur], cur_time + time[cur])
			dfs(cur + 1, cur_score, cur_time)
		}
	}
	dfs(0, 0, 0)
	return max_value
}
let ps = [10, 25, 15, 6, 7]
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt))
