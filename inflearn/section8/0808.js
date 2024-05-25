// // 다중 for문으로 구현 시 매번 n개만큼 for문을 계속 추가시켜야 함
// function solution(n, m) {
// 	let answer = []
// 	let sum = 0
// 	let tmp = Array.from({length: m}, () => 0)
// 	function DFS(L) {
// 		if (L === m) {
// 			answer.push(tmp.slice())
// 			sum++
// 			return
// 		} else {
// 			for (let i = 1; i <= n; i++) {
// 				tmp[L] = i
// 				DFS(L + 1)
// 			}
// 		}
// 	}

// 	DFS(0)
// 	answer.push(sum)
// 	return answer
// }

const solution = (n, m) => {
	let answer = []
	let sum = 0
	const visited = Array(m).fill(0)
	const dfs = (x) => {
		if (x === m) {
			sum += 1
			answer.push(visited.slice())
		} else {
			for (let i = 1; i <= n; i++) {
				visited[x] = i
				dfs(x + 1)
			}
		}
	}
	dfs(0, 0)
	answer.push(sum)
	return answer
}

console.log(solution(3, 2))
