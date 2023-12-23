const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, K, H] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: H }, () =>
	Array.from({ length: K }, () => Array.from({ length: M }, () => 0))
);

const visited = Array.from({ length: H }, () =>
	Array.from({ length: K }, () => Array.from({ length: M }, () => 0))
);

const dz = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dx = [0, 0, 0, 0, 1, -1];

let count = M * K * H;

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

for (let i = 0; i < H; i++) {
	for (let j = 0; j < K; j++) {
		graph[i][j] = input.shift().split(" ").map(Number);
	}
}

for (let i = 0; i < H; i++) {
	for (let j = 0; j < K; j++) {
		for (let k = 0; k < M; k++) {
			// 토마토 익은거
			if (graph[i][j][k] === 1) {
				visited[i][j][k] = 1;
				queue.enqueue([i, j, k, 0]);
				count--;
			}
			// 토마토 못 넣는 곳은 그냥 방문 처리
			else if (graph[i][j][k] === -1) {
				visited[i][j][k] = 1;
				count--;
			}
		}
	}
}

let totalday = 0;

while (queue.size) {
	const [z, y, x, day] = queue.dequeue();
	for (let j = 0; j < 6; j++) {
		const nz = z + dz[j];
		const ny = y + dy[j];
		const nx = x + dx[j];
		// 토마토가 익지 않았고 방문 가능한 상태
		if (
			nx >= 0 &&
			ny >= 0 &&
			nz >= 0 &&
			ny < K &&
			nx < M &&
			nz < H &&
			visited[nz][ny][nx] === 0
		) {
			queue.enqueue([nz, ny, nx, day + 1]);
			visited[nz][ny][nx] = 1;
			count--;
			totalday = Math.max(totalday, day + 1);
		}
	}
}
console.log(count ? -1 : totalday);
