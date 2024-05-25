// function solution(n, r) {
//   let answer = [];

//   function DFS(n, r) {
//     if (n === r || r === 0) return 1;
//     else return DFS(n - 1, r - 1) + DFS(n - 1, r);
//   }
//   answer = DFS(n, r);
//   return answer;
// // }

// // 최적화, 메모이제이션, 전에 사용했던 계산들을 다시하지않고 가져쓴다.
// // 2차원 배열에 저장
// function solution(n, r) {
// 	let answer = []
// 	let dy = Array.from(Array(35), () => Array(35).fill(0))

// 	function DFS(n, r) {
// 		if (dy[n][r] > 0) return dy[n][r] // 이미 구한 값일 경우 사용
// 		if (n === r || r === 0) return 1
// 		else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)) // 저장후 리턴
// 	}
// 	answer = DFS(n, r)
// 	return answer
// }

const solution = (n, r) => {
	const memo = Array.from(Array(34), () => Array(34).fill(0))

	const dfs = (n, r) => {
		if (n === r || r === 0) {
			return 1
		}
		if (memo[n][r]) {
			return memo[n][r]
		} else {
			memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)
			return memo[n][r]
		}
	}
	const answer = dfs(n, r)
	return answer
}

console.log(solution(33, 19))
