// function solution(m, arr) {
//   let answer = [];
//   n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0);
//   answer.push(answer.length);
//   return answer;
// }

const solution = (n, arr) => {
	const visited = Array(arr.length).fill(0)
	const tmp = Array(n).fill(0)
	const answer = []
	const dfs = (cur) => {
		if (cur === n) {
			answer.push(tmp.slice())
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (visited[i] === 0) {
					visited[i] = 1
					tmp[cur] = arr[i]
					dfs(cur + 1)
					visited[i] = 0
				}
			}
		}
	}
	dfs(0)
	answer.push(answer.length)
	return answer
}
let arr = [3, 6, 9]
console.log(solution(2, arr))
