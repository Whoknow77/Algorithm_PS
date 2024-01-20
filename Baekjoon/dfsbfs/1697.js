const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const dx = ["-", "+", "*"];
const visited = Array.from(Array(100001).fill(0));
function bfs(x, y) {
	const queue = [[x, 0]];
	while (queue.length) {
		for (let j = 0; j < queue.length; j++) {
			let [current, count] = queue.shift();

			// -1, +1, 현재위치*2를 모두 큐에 넣는다(조사)
			for (let i = 0; i < 3; i++) {
				if (dx[i] === "-") {
					if (current - 1 === y) {
						return count + 1;
					}
					if (
						!visited[current - 1] &&
						current - 1 >= 0 &&
						current - 1 <= 100000
					) {
						queue.push([current - 1, count + 1]);
						visited[current - 1] = 1;
					}
				}
				if (dx[i] === "+") {
					if (current + 1 === y) {
						return count + 1;
					}
					if (
						!visited[current + 1] &&
						current + 1 >= 0 &&
						current + 1 <= 100000
					) {
						queue.push([current + 1, count + 1]);
						visited[current + 1] = 1;
					}
				}
				if (dx[i] === "*") {
					if (current * 2 === y) {
						return count + 1;
					}
					if (
						!visited[current * 2] &&
						current * 2 >= 0 &&
						current * 2 <= 100000
					) {
						queue.push([current * 2, count + 1]);
						visited[current * 2] = 1;
					}
				}
			}
		}
	}
}

if (N === K) {
	console.log(0);
	return;
}

console.log(bfs(N, K));

// 방문 배열을 하지 않으면 시간초과가 남..
// 아무리 멀리가도 200000 을 넘어가진 않고 -를 가지 않음
// 어차피 100000을 탈출하는것은 바보같은 짓임 +1은 말이 안되고
// *2로 탈출했다 하여도 -1을 개 많이 해야 해서 손해임. 차라리 -1 하고 *2 하는게 좋음
// 따라서 0~100000 을 벗어나면 안됨
