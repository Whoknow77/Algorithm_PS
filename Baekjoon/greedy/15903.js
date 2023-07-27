const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input.shift().split(' ').map(Number)
let arr = input.shift().split(' ').map(Number);

class PriorityQueue {
    constructor() {
        this.queue = [0];
    }

    enqueue(element) {
        let isertIdx = this.queue.length;
        while (isertIdx > 1 && this.queue[Math.floor(isertIdx / 2)] > element) {
            this.queue[isertIdx] = this.queue[Math.floor(isertIdx / 2)];
            isertIdx = Math.floor(isertIdx / 2);
        }
        this.queue[isertIdx] = element;
    }

    dequeue() {
        const delValue = this.queue[1];
        const lastValue = this.queue.pop();

        let pIdx = 1;
        let cIdx = 2;

        while (cIdx <= this.queue.length - 1) {
            if (cIdx < this.queue.length - 1 && this.queue[cIdx] > this.queue[cIdx + 1]) {
                cIdx++;
            }
            if (lastValue <= this.queue[cIdx]) {
                break;
            }
            this.queue[pIdx] = this.queue[cIdx];
            pIdx = cIdx;
            cIdx *= 2;
        }
        this.queue[pIdx] = lastValue;
        return delValue;
    }

    size() {
        return this.queue.length - 1;
    }

    sum(){
        return this.queue.slice(1).reduce((a, b) => a + b, 0);
    }
}

let pq = new PriorityQueue();
for(let i=0; i<arr.length; i++){
    pq.enqueue(arr[i]);
}

while(M > 0){
    let first = pq.dequeue();
    let second = pq.dequeue();
    let sum = first + second;
    pq.enqueue(sum);
    pq.enqueue(sum);
    M--;
    console.log(pq)
}

console.log(pq.sum());
