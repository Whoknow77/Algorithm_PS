// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input.shift());
// const arr = input[0].split(' ').map(Number)
// const answer = [];
// const index = Array.from({ length: N }, (_, i) => i + 1);
// let cur = 0;
// let target = arr.shift();
// answer.push(index.shift()); // 1 터뜨리기


// while(arr.length){
//     // 음수 -> 끝을 앞으로 반복
//     if (target < 0) {
//         for (let i = 0; i < -target; i++){
//             arr.unshift(arr.pop());
//             index.unshift(index.pop());
//         }

//     }
//     else {
//         for (let i = 0; i < target-1; i++){
//             arr.push(arr.shift());
//             index.push(index.shift());
//         }
//     }

//     target = arr.shift();
//     answer.push(index.shift())
// }
// console.log(answer)

// 덱 안써서 메모리 초과(unshift, shift)


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input[0].split(' ').map(Number)

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
}

const dequeue = new Deque();
const indexdequeue = new Deque();
const answer = [];
for (let i = 0; i < N; i++){
    dequeue.pushBack(arr[i])
    indexdequeue.pushBack(i+1)
}

let target = dequeue.popFront();
answer.push(indexdequeue.popFront()); // 1 터뜨리기


while(dequeue.getSize()){
    // 음수 -> 끝을 앞으로 반복
    if (target < 0) {
        for (let i = 0; i < -target; i++){
            dequeue.pushFront(dequeue.popBack());
            indexdequeue.pushFront(indexdequeue.popBack());
        }

    }
    else {
        for (let i = 0; i < target-1; i++){
            dequeue.pushBack(dequeue.popFront());
            indexdequeue.pushBack(indexdequeue.popFront());
        }
    }

    target = dequeue.popFront();
    answer.push(indexdequeue.popFront())
}
console.log(answer.join(' '))

// 덱 구현했는데도 안됨.. 찾아보니 어떻게 풀어도 js는 메모리 초과 되는듯

// 앞으로 js로 문제 풀 때 맞힌 사람 별로 없으면 의심해봐야함 --> 생각보다 중요함