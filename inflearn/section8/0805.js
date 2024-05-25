// function solution(arr) {
//   let answer = "NO";
//   let total = arr.reduce((a, b) => a + b, 0);
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (answer === "YES") return;
//     if (L === n) {
//       if (total - sum === sum) {
//         answer = "YES";
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

const solution = (arr) => {
	let answer = "NO"
	const dfs = (cur, sum) => {
		if (answer === "YES") return
		if (cur === arr.length + 1) {
			if (total_sum - sum === sum) {
				answer = "YES"
			}
		} else {
			dfs(cur + 1, sum + arr[cur - 1])
			dfs(cur + 1, sum)
		}
	}
	const total_sum = arr.reduce((cur, prev) => cur + prev, 0)
	dfs(1, 0)
	return answer
}
arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr))
