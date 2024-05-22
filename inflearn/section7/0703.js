// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - (i + 1); j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         // 양수와 음수 비교만 허용
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// let arr = [1, 3, 2, -3, -2, 5, 6, -6];
// console.log(solution(arr));

const solution = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > 0 && arr[j + 1] < 0) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution(arr))

// 1 2 -3 -2 3 5 -4 -3
// 1 -3 -2 2 3 -4

// 1 -3 -2 2 3 -6 5 6

// -3 -2 1 2 -6 3 5 6
// -3 -2 1 -6 2 3 5 6
// -3 -2 -6 1 2 3 5 6
