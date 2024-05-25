// // function solution(c, arr) {
// //   let answer = Number.MIN_SAFE_INTEGER;
// //   let n = arr.length;
// //   function DFS(L, sum) {
// //     if (sum > answer && sum < c) {
// //       answer = sum;
// //     }
// //     if (L === n) {
// //       if (sum > c) {
// //         sum -= arr[L - 1];
// //       }
// //     } else {
// //       DFS(L + 1, sum + arr[L]);
// //       DFS(L + 1, sum);
// //     }
// //   }
// //   DFS(0, 0);
// //   return answer;
// // }

// // let arr = [81, 58, 42, 33, 61];
// // console.log(solution(259, arr));

// // 정답

// function solution(c, arr) {
// 	let answer = Number.MIN_SAFE_INTEGER
// 	let n = arr.length
// 	function DFS(L, sum) {
// 		if (sum > c) {
// 			return
// 		}
// 		if (L === n) {
// 			answer = Math.max(answer, sum)
// 		} else {
// 			DFS(L + 1, sum + arr[L])
// 			DFS(L + 1, sum)
// 		}
// 	}
// 	DFS(0, 0)
// 	return answer
// }

const solution = (total, arr) => {
	const visited = Array(arr.length + 1).fill(0)
	let max_value = Number.MIN_SAFE_INTEGER
	const dfs = (cur, sum) => {
		if (sum > total) {
			return
		}
		if (cur === arr.length) {
			max_value = Math.max(sum, max_value)
		} else {
			dfs(cur + 1, sum + arr[cur])
			dfs(cur + 1, sum)
		}
	}

	dfs(0, 0)
	return max_value
}

let arr = [81, 58, 42, 33, 61]
console.log(solution(259, arr))
