// function solution(n) {
// 	let answer = []
// 	let ch = Array.from({length: n + 1}, () => 0)
// 	function DFS(v) {
// 		if (v === n + 1) {
// 			let tmp = ""
// 			for (let i = 1; i <= n; i++) {
// 				if (ch[i] === 1) tmp += i + " "
// 			}
// 			if (tmp.length > 0) answer.push(tmp.trim()) // 공집합 제거
// 		} else {
// 			ch[v] = 1
// 			DFS(v + 1)
// 			ch[v] = 0
// 			DFS(v + 1)
// 		}
// 	}
// 	DFS(1)
// 	return answer
// }
// // 0 0 1 0

const solution = (n) => {
	const answer = []
	const visited = Array(n + 1).fill(0)
	const dfs = (x) => {
		console.log(visited)
		if (x === n + 1) {
			let tmp = ""
			for (let i = 1; i <= n; i++) {
				if (visited[i] === 1) {
					tmp += i + " "
				}
			}
			if (tmp.length > 0) {
				answer.push(tmp.trim())
			}
		} else {
			visited[x] = 1
			dfs(x + 1)
			visited[x] = 0
			dfs(x + 1)
		}
	}
	dfs(1)
	return answer
}
console.log(solution(3))
