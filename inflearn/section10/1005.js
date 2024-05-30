// function solution(m, arr) {
// 	let answer = 0
// 	let dy = Array.from({length: m + 1}, () => 0)
// 	for (let i = 0; i < arr.length; i++) {
// 		let ps = arr[i][0] // score
// 		let pt = arr[i][1] // time
// 		for (let j = m; j >= pt; j--) {
// 			dy[j] = Math.max(dy[j], dy[j - pt] + ps)
// 		}
// 	}
// 	answer = dy[m]
// 	return answer
// }

const solution = (end_time, arr) => {
	const dp = Array(end_time + 1).fill(0)
	for (let i = 0; i < arr.length; i++) {
		const ps = arr[i][0]
		const pt = arr[i][1]
		for (let j = end_time; j >= pt; j--) {
			dp[j] = Math.max(dp[j - pt] + ps, dp[j])
		}
		console.log(dp)
	}
	return dp[end_time]
}

let arr = [
	[10, 5],
	[25, 12],
	[15, 8],
	[6, 3],
	[7, 4],
]
console.log(solution(20, arr))
