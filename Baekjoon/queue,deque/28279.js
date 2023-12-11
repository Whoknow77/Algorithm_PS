// 배열이 아니라 양방향 연결리스트로 풀어야 시간초과 안남
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

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

	popFront() {
		if (this.getSize() === 0) {
			return -1;
    }
    // 현재 사이즈가 1, 2, 3 이상일때로 나눔
    else if (this.getSize() === 1) {
      // 남은건 아무것도 없으므로 모두 null로 초기화
			const popedItem = this.head.item;
			this.head = null;
			this.tail = null;
			this.size -= 1;
			return popedItem;
    } else if (this.getSize() === 2) {
      // 남은건 하나 이므로 head만 존재(삽입할때처럼 next, prev존재 x)
			const popedItem = this.head.item;
			this.head = this.head.next;
			this.tail.prev = null;
			this.size -= 1;
			return popedItem;
    } else if (this.getSize() > 2) {
      // 남은건 2개이상 이므로 head가 가리킨는걸 맨 앞으로
			const popedItem = this.head.item;
			this.head.next.prev = null;
			this.head = this.head.next;
			this.size -= 1;
			return popedItem;
		}
	}

	popBack() {
		if (this.getSize() === 0) {
			return -1;
		} else if (this.getSize() === 1) {
			const popedItem = this.tail.item;
			this.head = null;
			this.tail = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() === 2) {
			const popedItem = this.tail.item;
			this.tail = this.tail.prev;
			this.head.next = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() > 2) {
			const popedItem = this.tail.item;
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
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

	getFront() {
		return this.getSize() ? this.head.item : -1;
	}

	getBack() {
		return this.getSize() ? this.tail.item : -1
	}
}


const deque = new Deque();
const answer = [];

for (let i = 0; i < input.length; i++){
    const [a, b] = input[i].split(' ').map(Number);
    switch(a){
        case 1:
            deque.pushFront(b);
            break;
        case 2:
            deque.pushBack(b);
            break;
        case 3:
            answer.push(deque.popFront());
            break;
        case 4:
            answer.push(deque.popBack());
            break;
        case 5:
            answer.push(deque.getSize());
            break;
        case 6:
            answer.push(deque.isEmpty());
            break;
        case 7:
            answer.push(deque.getFront())
            break;
        case 8:
            answer.push(deque.getBack());
            break;
    }
}
console.log(answer.join('\n'))

