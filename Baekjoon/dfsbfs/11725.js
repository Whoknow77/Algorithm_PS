const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +inputs.shift();

class Queue {
	constructor() {
		this.queue = [];
		this.tail = 0;
		this.head = 0;
	}

	push(newValue) {
		this.queue.push(newValue);
		this.tail++;
	}

	size() {
		return this.tail - this.head;
	}

	shift() {
		const returnValue = this.queue[this.head];
		delete this.queue[this.head];
		this.head++;

		return returnValue;
	}
}
const answer = [];

function solution(N, arr) {
	const graph = Array.from({ length: N + 1 }, () => []);

	for (const node of arr) {
		const [A, B] = node.split(" ").map(Number);
		graph[A].push(B);
		graph[B].push(A);
	}

	const results = Array.from({ length: N - 1 }, () => 0);

	const queue = new Queue();
	queue.push(1);

	while (queue.size() !== 0) {
		const value = queue.shift();

		// 인접 배열에 아이템이 요소가 있으면 반복문으로
		for (const item of graph[value]) {
			if (!results[item - 2]) {
				// 결과
				results[item - 2] = value;
				queue.push(item);
			}
		}
	}

	for (const result of results) {
		answer.push(result);
	}
}

solution(N, inputs);
console.log(answer.join("\n"));
