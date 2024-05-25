// function solution(n) {
// 	let answer
// 	function DFS(n) {
// 		if (n === 1) return 1
// 		else return n * DFS(n - 1)
// 	}
// 	answer = DFS(n)
// 	return answer
// }

const solution = (n) => {
	const dfs = (x) => {
		if (x === 1) {
			return 1
		} else {
			return dfs(x - 1) * x
		}
	}
	const answer = dfs(n)
	return answer
}

console.log(solution(5))
