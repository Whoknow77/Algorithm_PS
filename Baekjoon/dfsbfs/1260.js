const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const bfs = (graph, startNode) => {
// 	const visited = [];
// 	let needVisit = [];

// 	needVisit.push(startNode);

// 	while (needVisit.length !== 0) {
// 		console.log(needVisit);
// 		const node = needVisit.shift();
// 		if (!visited.includes(node)) {
// 			visited.push(node);
// 			let nodes = graph[node];
// 			needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
// 		}
// 	}

// 	return visited;
// };

// const dfs = (graph, startNode) => {
// 	const visited = []; // 실제 방문한 곳
// 	let needVisit = []; // 방문 해야할 곳

// 	needVisit.push(startNode);
// 	while (needVisit.length !== 0) {
// 		const node = needVisit.pop();
// 		if (!visited.includes(node)) {
// 			visited.push(node);
// 			let nodes = graph[node];
// 			needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)]; 
// 		}
// 	}

// 	return visited;
// };

// const [n, edge, start] = input.shift().split(" ").map(Number);
// const grph = [...Array(n + 1)].map((e) => []);

// // 그래프 양방향 연결
// for (let i = 0; i < edge; i++) {
// 	const [from, to] = input[i].split(" ").map(Number);
// 	grph[from].push(to);
// 	grph[to].push(from);
// }

// console.log(dfs(grph, start).join(" "));
// console.log(bfs(grph, start).join(" "));

// 1   2 3 4
// 2   1 4
// 3   1 4
// 4   1 2 3

// dfs



// -----------------------------------------------------------

const answerBFS = [];
const answerDFS = [];

const [n, edge, start] = input.shift().split(" ").map(Number);

const visitedDFS = new Array(n + 1).fill(false);
const visitedBFS = new Array(n + 1).fill(false);

const grph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

// 그래프 양방향 연결
for (let i = 0; i < edge; i++) {
	const [from, to] = input[i].split(" ").map(Number);
	grph[from][to] = 1;
	grph[to][from] = 1;
}

const BFS = (v) => {
	const queue = [];
	queue.push(v);
	answerBFS.push(v);

	while (queue.length > 0) {
		const dequeue = queue.shift();
		visitedBFS[dequeue] = true;
		for (let i = 1; i < grph.length; i++) {
			// 방금 뺀 노드와 연결된 노드 방문

			// 존재하며 방문하지 않은 노드 방문
			if (grph[dequeue][i] === 1 && visitedBFS[i] === false) {
				visitedBFS[i] = true;
				queue.push(i);
				answerBFS.push(i);
			}
		}
	}
};

const DFS = (v) => {
	visitedDFS[v] = true;
	answerDFS.push(v);
	for (let i = 1; i < grph.length; i++) {
		if (grph[v][i] === 1 && visitedDFS[i] === false) {
			DFS(i);
		}
	}
};

BFS(start);
DFS(start);

console.log(answerDFS.join(" "));
console.log(answerBFS.join(" "));

// visited needVisit
// [] [1]
// [1] [2 3 4]
// [1 2] [4 1]
// [1 2 4] [3]
// [1 2 4 3]
