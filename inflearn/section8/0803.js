// function solution(v) {
//   let answer;
//   function DFS(v) {
//     if (v > 7) return;
//     else {
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//       console.log(v);
//     }
//   }

//   DFS(v);
//   return answer;
// }

const solution = (v) => {
	let answer
	const DFS = (v) => {
		if (v > 7) {
			return
		} else {
			console.log(v)
			DFS(v * 2)
			DFS(v * 2 + 1)
		}
	}
	DFS(v)
	return answer
}

console.log(solution(1))
