// function solution(m, coin) {
// 	let answer = 0
// 	let dy = Array.from({length: m + 1}, () => 1000)
// 	dy[0] = 0
// 	for (let i = 0; i < coin.length; i++) {
// 		for (let j = coin[i]; j <= m; j++) {
// 			dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1)
// 		}
// 	}
// 	answer = dy[m]
// 	return answer
// }

const solution = (n, arr) => {
	const dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
	dp[0] = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = arr[i]; j <= n; j++) {
			dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1)
		}
	}
	return dp[n]
}

let arr = [1, 2, 5]
console.log(solution(22, arr))
