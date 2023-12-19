const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const visitedBFS = new Array(n + 1).fill(false);
const grph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

// 그래프 양방향 연결
for (let i = 0; i < edge; i++) {
	const [from, to] = input[i].split("").map(Number);
	grph[from][to] = 1;
	grph[to][from] = 1;
}

const BFS = (v) => {
	const queue = [];
	queue.push(v);

	while (queue.length > 0) {
		const dequeue = queue.shift();
		visitedBFS[dequeue] = true;
		for (let i = 1; i < grph.length; i++) {
			// 방금 뺀 노드와 연결된 노드 방문

			// 존재하며 방문하지 않은 노드 방문
			if (grph[dequeue][i] === 1 && visitedBFS[i] === false) {
				visitedBFS[i] = true;
				queue.push(i);
			}
		}
	}
};

BFS(start);

console.log(answerBFS.join(" "));
