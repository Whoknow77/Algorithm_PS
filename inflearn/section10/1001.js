// function solution(n) {
// 	let dy = Array.from({length: n + 1}, () => 0)
// 	dy[1] = 1
// 	dy[2] = 2
// 	for (let i = 3; i <= n; i++) {
// 		dy[i] = dy[i - 2] + dy[i - 1]
// 	}
// 	return dy[n]
// }
// const dp = Array(46).fill(0)
// dp[1] = 1
// dp[2] = 2

// const solution = (x) => {
// 	if (dp[x]) {
// 		return dp[x]
// 	} else {
// 		dp[x] = solution(x - 1) + solution(x - 2)
// 		return dp[x]
// 	}
// }

const solution = (x) => {
	const dp = Array(46).fill(0)
	dp[1] = 1
	dp[2] = 2
	for (let i = 3; i <= x; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	return dp[x]
}

console.log(solution(7))
