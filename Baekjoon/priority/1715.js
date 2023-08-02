const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  // idx = 1에 min value 저장
  constructor() {
    this.heap = [Number.MAX_SAFE_INTEGER];
  }

  // 삭제과정에서 부모가 자식보다 큰 경우 교체
  isBiggerThanChildren(idx) {
    // 자식이 존재하는지
    let leftChildIdx = 2 * idx;
    let rightChildIdx = 2 * idx + 1;

    if (rightChildIdx < this.heap.length) {
      return (
        this.heap[idx] > this.heap[leftChildIdx] ||
        this.heap[idx] > this.heap[rightChildIdx]
      );
    } else if (leftChildIdx < this.heap.length) {
      return this.heap[idx] > this.heap[leftChildIdx];
    } else {
      return false;
    }
  }

  swapValue(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  insert(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swapValue(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }
  size() {
    return this.heap.length;
  }

  remove() {
    // 최소 하나는 있는 경우 [0, value]인 경우
    if (this.heap.length > 1) {
      // [0, value] 인 경우 value 리턴
      if (this.heap.length === 2) return this.heap.pop();

      let removedVal = this.heap[1];
      this.heap[1] = this.heap.pop();
      let currentIdx = 1;

      // 우선 자식들이 부모보다 작은 경우
      while (this.isBiggerThanChildren(currentIdx)) {
        let leftChildIdx = 2 * currentIdx;
        let rightChildIdx = 2 * currentIdx + 1;
        let smallIdx;
        if (this.heap[rightChildIdx] < this.heap[leftChildIdx]) {
          smallIdx = rightChildIdx;
        } else {
          smallIdx = leftChildIdx;
        }

        this.swapValue(smallIdx, currentIdx);
        currentIdx = smallIdx;
      }

      return removedVal;
    } else return 0;
  }
}

const pq = new MinHeap();

const N = Number(input.shift());

const arr = input.map(Number);

const answer = [];
for (let i = 0; i < N; i++) {
  if (arr[i] > 0) {
    pq.insert(arr[i]);
  }
}
let total = 0;
while (pq.size() > 2) {
  let sum = pq.remove() + pq.remove();
  pq.insert(sum);
  total += sum;
}
console.log(total);
