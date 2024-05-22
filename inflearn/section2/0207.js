// function solution(arr) {
//   let arr2 = arr.map((item) =>
//     item
//       .join("")
//       .toString(2)
//       .padStart(arr.length + 1, 0)
//       .padEnd(arr.length + 2, 0)
//       .split("")
//   );
//   const zero = Array(arr.length + 2)
//     .fill(0)
//     .map((num) => num.toString(2));
//   arr2.unshift(zero); // 앞에 0 넣기
//   arr2.push(zero); // 뒤에 0 넣기
//   let sum = 0;
//   for (let i = 1; i < arr2.length - 1; i++) {
//     for (let j = 1; j < arr2.length - 1; j++) {
//       let standard = parseInt(arr2[i][j]);
//       if (
//         standard > parseInt(arr2[i - 1][j]) &&
//         standard > parseInt(arr2[i][j - 1]) &&
//         standard > parseInt(arr2[i][j + 1]) &&
//         standard > parseInt(arr2[i + 1][j])
//       ) {
//         sum += 1;
//       }
//     }
//   }
//   return sum;
// }

// // 정답(undefined를 신경안써도됨)
// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let flag = 1;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (
//           nx >= 0 &&
//           nx < n &&
//           ny >= 0 &&
//           ny < n &&
//           arr[nx][ny] >= arr[i][j]
//         ) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];
// console.log(solution(arr));

const n = 5
const arr = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
]

const solution = (arr) => {
	let count = 0
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const target = arr[i][j]
			let top = 0
			let right = 0
			let bottom = 0
			let left = 0
			if (0 <= i - 1 && i - 1 <= n - 1) {
				top = arr[i - 1][j]
			}
			if (0 <= j + 1 && j + 1 <= n - 1) {
				right = arr[i][j + 1]
			}
			if (0 <= i + 1 && i + 1 <= n - 1) {
				bottom = arr[i + 1][j]
			}
			if (0 <= j - 1 && j - 1 <= n - 1) {
				left = arr[i][j - 1]
			}

			if (target > top && target > bottom && target > right && target > left) {
				count += 1
			}
		}
	}
	return count
}

console.log(solution(arr))
