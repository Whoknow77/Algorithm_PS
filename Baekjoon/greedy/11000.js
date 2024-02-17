class MaxHeap {
	constructor() {
		this.heap = [null];
	}

	push(value) {
		this.heap.push(value);
		let currentIdx = this.heap.length - 1;
		let parentIdx = Math.floor(currentIdx / 2);

		while (parentIdx !== 0 && this.heap[parentIdx] > value) {
			const temp = this.heap[parentIdx];
			this.heap[parentIdx] = value;
			this.heap[currentIdx] = temp;

			currentIdx = parentIdx;
			parentIdx = Math.floor(currentIdx / 2);
		}
	}

	pop(value) {
		const returnValue = this.heap[1];
		this.heap[1] = this.heap.pop();
		let currentIdx = 1;
		let leftIdx = 2;
		let rightIdx = 3;

		while (
			this.heap[currentIdx] > this.heap[leftIdx] ||
			this.heap[currentIdx] > this.heap[rightIdx]
		) {
			if (this.heap[leftIdx] > this.heap[rightIdx]) {
				const temp = this.heap[currentIdx];
				this.heap[currentIdx] = this.heap[rightIdx];
				this.heap[rightIdx] = temp;
				currentIdx = rightIdx;
			} else {
				const temp = this.heap[currentIdx];
				this.heap[currentIdx] = this.heap[leftIdx];
				this.heap[leftIdx] = temp;
				currentIdx = leftIdx;
			}

			leftIdx = currentIdx * 2;
			rightIdx = currentIdx * 2 + 1;
		}
		return returnValue;
	}

	length() {
		return this.heap.length - 1;
	}

	get() {
		return this.heap[1];
	}
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const heap = new MaxHeap();

let lectures = [];

for (let i = 1; i <= N; i++) {
	lectures.push(input[i].split(" ").map(Number));
}

lectures.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

heap.push(lectures[0][1]);

for (let i = 1; i < N; i++) {
	const [start, finish] = lectures[i];
	const finishTime = heap.get();
	if (finishTime <= start) {
		heap.pop();
	}
	heap.push(finish);
}
console.log(heap.length());
