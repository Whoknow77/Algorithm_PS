// 배열이 아니라 양방향 연결리스트로 풀어야 시간초과 안남
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const flag = input.shift().split(" ").map(Number); // 큐 or 스택
const arr = input.shift().split(" ").map(Number); // 원소
const number = input.shift();
const inputarr = input.shift().split(" ").map(Number); // 넣을 원소

class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pushFront(item) {
		const newNode = new Node(item);
		// 길이가 0일때 삽입하는 경우 head와 tail 동일
		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.size += 1;
	}

	pushBack(item) {
		const newNode = new Node(item);
		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.size += 1;
	}

	pop() {
		if (this.getSize() === 0) {
			return -1;
		} else {
			const popedItem = this.tail.item;
			if (this.tail.prev) {
				this.tail.prev.next = this.tail;
				this.tail = this.tail.prev;
			} else {
				this.tail = null;
			}
			this.size -= 1;
			return popedItem;
		}
	}

	getSize() {
		return this.size;
	}

	isEmpty() {
		return this.getSize() ? 0 : 1;
	}
}

const dequeue = new Deque();
const answer = [];

for (let j = 0; j < N; j++) {
	// 큐
	if (flag[j] === 0) {
		dequeue.pushBack(arr[j]);
	}
}

inputarr.forEach((value) => {
	dequeue.pushFront(value);
	answer.push(dequeue.pop());
});

console.log(answer.join(" "));

// 1 2 3 4

// 2  4  7
