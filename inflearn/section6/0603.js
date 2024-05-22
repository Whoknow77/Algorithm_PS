// function solution(board, moves) {
//   let stack = [];
//   let arr = [[]];
//   let sum = 0;
//   for (let i = 0; i < board.length; i++) {
//     arr[i] = [];
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][i] !== 0) {
//         arr[i].push(board[j][i]);
//       }
//     }
//   }
//   moves.forEach((item) => {
//     if (stack[stack.length - 1] !== arr[item - 1][0]) {
//       stack.push(arr[item - 1][0]);
//     } else {
//       stack.pop();
//       sum += 2;
//     }
//     arr[item - 1].shift();
//   });
//   return sum;
// }

// // 정답
// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][pos - 1] !== 0) {
//         let tmp = board[i][pos - 1];
//         board[i][pos - 1] = 0;
//         if (tmp === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         } else {
//           stack.push(tmp);
//         }
//         break;
//       }
//     }
//   });
//   return answer;
// }

// let a = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));
const solution = (board, moves) => {
	const new_board = []
	for (let i = 0; i < board.length; i++) {
		const subArr = []
		for (let j = 0; j < board.length; j++) {
			if (board[j][i] !== 0) {
				subArr.push(board[j][i])
			}
		}
		new_board.push(subArr.reverse())
	}
	let count = 0
	const total = []
	for (const target of moves) {
		console.log(total)
		if (new_board[target - 1].length > 0) {
			total.push(new_board[target - 1].pop())
		}
		if (total.length >= 2) {
			if (total[total.length - 1] == total[total.length - 2]) {
				total.pop()
				total.pop()
				count += 2
			}
		}
	}
	return count
}

const a = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
]

const b = [1, 5, 3, 5, 1, 2, 1, 4]
console.log(solution(a, b))
