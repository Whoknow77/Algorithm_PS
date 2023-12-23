const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, K] = input.shift().split(" ").map(Number);
const visited = Array.from(Array(K), () => Array(M).fill(0));
const graph = [];
const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];
let count = M * K;

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(node) {
		if (!this.head) {
			this.head = node;
		}
		if (this.tail) {
			this.tail.next = node;
		}
		this.tail = node;
		this.size++;
	}

	dequeue() {
		if (!this.size) {
			return null;
		}
		const node = this.head;
		this.head = this.head.next;
		this.size--;
		return node;
	}
}
const queue = new Queue();

for (let i = 0; i < K; i++) {
	const innergraph = input[i].split(" ").map(Number);
	graph.push(innergraph);
}

// 이렇게 하면 동시에 접근 불가능
// 미리 조사할 곳 넣어놓기
for (let i = 0; i < K; i++) {
	for (let j = 0; j < M; j++) {
		// 토마토 익은거
		if (graph[i][j] === 1) {
			visited[i][j] = 1;
			queue.enqueue([i, j, 0]);
			count--;
		}
		// 토마토 못 넣는 곳은 그냥 방문 처리
		else if (graph[i][j] === -1) {
			visited[i][j] = 1;
			count--;
		}
	}
}
let totalday = 0;

while (queue.size) {
	const [x, y, day] = queue.dequeue();
	for (let j = 0; j < 4; j++) {
		const nx = x + dx[j];
		const ny = y + dy[j];
		// 토마토가 익지 않았고 방문 가능한 상태
		if (nx >= 0 && ny >= 0 && nx < K && ny < M && visited[nx][ny] === 0) {
			queue.enqueue([nx, ny, day + 1]);
			visited[nx][ny] = 1;
			count--;
			totalday = Math.max(totalday, day + 1);
		}
	}
}
console.log(count ? -1 : totalday);

// 동시접근문제, -1을 어떻게 처리할것인가에 대한 문제, 개수에 대한 문제

// queue or index
