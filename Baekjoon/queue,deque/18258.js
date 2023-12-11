const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
	}
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    };

  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
    };

  dequeue() {
    if (this.size === 0) {
      return -1
    }
    const value = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.size === 0) this.back = null;
    return value;
  };

  isEmpty() {
    return this.size === 0;
  };

  peek() {
    if (this.size === 0) return -1;
    return this.front.value;
    };
    
    peek2(){
        if (this.size === 0) {
            return -1;
        }
        return this.back.value;
    };
}

const queue = new Queue();
const answer=[]

for (let i = 0; i < N; i++){
    const [a, b] = input[i].trim().split(' ');
    switch (a) {
        case 'push':
            queue.enqueue(Number(b));
            break;
        case 'front':
            answer.push(queue.peek());
            break;
        case 'back':
            answer.push(queue.peek2());
            break;
        case 'size':
            answer.push(queue.size);
            break;
        case 'pop':
            answer.push(queue.dequeue());
            break;
        case 'empty':
            if (queue.size === 0) {
                answer.push(1);
                break;
            }
            else {
                answer.push(0);
                break;
            }
    }
}
console.log(answer.join('\n'))