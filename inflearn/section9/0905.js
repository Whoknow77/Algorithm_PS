// // dis
// function solution(s, e) {
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   dis[s] = 0;
//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }
// }

// // level
// function solution2(s, e) {
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   let L = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1;
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1;
//           queue.push(nx);
//         }
//       }
//     }
//     L++;
//   }
// }

const solution = (s, e) => {
	pos = [1, -1, 5]
	const visited = Array(10001).fill(0)
	const bfs = (x, score) => {
		const queue = [[x, score]]
		while (queue.length) {
			const [cur, curScore] = queue.shift()
			for (let i = 0; i < 3; i++) {
				curPlus = pos[i] + cur
				if (curPlus === e) {
					return curScore + 1
				} else {
					queue.push([curPlus, curScore + 1])
					visited[curPlus] = 1
				}
			}
		}
	}

	const answer = bfs(s, 0)
	return answer
}
console.log(solution(8, 3))
