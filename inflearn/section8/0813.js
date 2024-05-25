// function solution(n, f) {
// 	let answer,
// 		flag = 0
// 	let dy = Array.from(Array(11), () => Array(11).fill(0)) // 메모이제이션
// 	let ch = Array.from({length: n + 1}, () => 0) // 순열 돌기위한 check 배열
// 	let p = Array.from({length: n}, () => 0) // 순열 저장
// 	let b = Array.from({length: n}, () => 0) // 조합 저장
// 	function combi(n, r) {
// 		if (dy[n][r] > 0) return dy[n][r]
// 		if (n === r || r === 0) return 1
// 		else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r))
// 	}
// 	function DFS(L, sum) {
// 		if (L === n && sum === f) {
// 			// 순열 완성
// 			answer = p.slice()
// 		} else {
// 			for (let i = 1; i <= n; i++) {
// 				if (ch[i] === 0) {
// 					ch[i] = 1
// 					p[L] = i
// 					DFS(L + 1, sum + b[L] * p[L])
// 					ch[i] = 0
// 				}
// 			}
// 		}
// 	}
// 	for (let i = 0; i < n; i++) {
// 		b[i] = combi(n - 1, i)
// 	}

// 	DFS(0, 0)
// 	return answer
// }

const solution = (n, f) => {
	let answer,
		flag = 0
	const dy = Array.from(Array(11), () => Array(11).fill(0))
	const ch = Array.from({length: n + 1}, () => 0)
	const p = Array.from({length: n}, () => 0)
	const b = Array.from({length: n}, () => 0)
	const combi = (n, r) => {
		if (n === r || r === 0) {
			return 1
		}
		if (dy[n][n] > 0) {
			return dy[n][r]
		} else {
			dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r)
			return dy[n][r]
		}
	}

	const dfs = (l, sum) => {
		if (flag) {
			return
		}
		if (l === n && sum === f) {
			answer = p.slice()
			flag = 1
		} else {
			for (let i = 1; i <= n; i++) {
				if (ch[i] === 0) {
					ch[i] = 1
					p[l] = i
					dfs(l + 1, sum + b[l] * p[l])
					ch[i] = 0
				}
			}
		}
	}
	for (let i = 0; i < n; i++) {
		b[i] = combi(n - 1, i)
	}
	dfs(0, 0)
	return answer
}
console.log(solution(4, 16))
