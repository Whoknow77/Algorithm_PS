// function solution(m, arr) {
// 	let answer = Number.MAX_SAFE_INTEGER
// 	let n = arr.length
// 	function DFS(L, sum) {
// 		if (sum > m) return
// 		if (L > answer) return
// 		if (sum === m) {
// 			answer = Math.min(answer, L)
// 		} else {
// 			for (let i = 0; i < n; i++) {
// 				DFS(L + 1, sum + arr[i])
// 			}
// 		}
// 	}
// 	DFS(0, 0)
// 	return answer
// }

const solution = (n, arr) => {
	let min_value = Number.MAX_SAFE_INTEGER
	const dfs = (cur, sum) => {
		if (sum > n || cur > answer) {
			return
		}
		if (sum === n) {
			min_value = Math.min(cur, min_value)
		} else {
			for (let i = 0; i < arr.length; i++) {
				dfs(cur + 1, sum + arr[i])
			}
		}
	}
	dfs(0, 0)
	return min_value
}
let arr = [1, 2, 5]
console.log(solution(15, arr))
