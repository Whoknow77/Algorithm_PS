// // 그리디, 회의가 일찍 끝나는 시간 순 정렬
// function solution(meeting) {
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) {
//       return a[0] - b[0];
//     } else {
//       return a[1] - b[1];
//     }
//   });
//   let et = 0;
//   for (let x of meeting) {
//     if (x[0] >= et) {
//       answer++;
//       et = x[1];
//     }
//   }
//   return answer;
// }

const solution = (n, arr) => {
	let count = 0
	let last = 0
	arr.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0]
		} else {
			return a[1] - b[1]
		}
	})
	for (let i = 0; i < n; i++) {
		if (last < arr[i][0]) {
			count += 1
			last = arr[i][1]
		}
	}
	return count
}
let arr = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
]
console.log(solution(5, arr))
