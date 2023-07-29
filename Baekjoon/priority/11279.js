const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class MaxHeap {
  constructor() {
    this.heap = [0];
  }

  // 삭제과정에서 부모가 자식보다 작은 경우 교체
  isSmallerThanChildren(idx) {
    let leftChildIdx = 2 * idx;
    let rightChildIdx = 2 * idx + 1;
  
    // 왼쪽 자식과 오른쪽 자식 노드가 모두 존재하는지 확인
    if (rightChildIdx < this.heap.length) {
      return (
        this.heap[idx] < this.heap[leftChildIdx] ||
        this.heap[idx] < this.heap[rightChildIdx]
      );
    } else if (leftChildIdx < this.heap.length) { // 왼쪽 자식만 존재하는 경우
      return this.heap[idx] < this.heap[leftChildIdx];
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

    while (currentIdx > 1 && this.heap[currentIdx] > this.heap[parentIdx]) {
      this.swapValue(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  remove() {
    // 최소 하나는 있는 경우 [0, value]인 경우
    if (this.heap.length > 1) {
      // [0, value] 인 경우 value 리턴
      if (this.heap.length === 2) return this.heap.pop();

      let removedVal = this.heap[1];
      this.heap[1] = this.heap.pop();
      let currentIdx = 1;

      // 우선 자식들이 부모보다 큰 경우
      while (this.isSmallerThanChildren(currentIdx)) {
        if (this.heap[2 * currentIdx + 1] > this.heap[2 * currentIdx]) {
          // 왼쪽 오른쪽 둘다 존재하는 경우
            this.swapValue(2 * currentIdx + 1, currentIdx);
            currentIdx = 2 * currentIdx + 1;
          }
         else {
          // 왼쪽만 존재하는 경우
            this.swapValue(2 * currentIdx, currentIdx);
            currentIdx = 2 * currentIdx;
          }
        
      }

      return removedVal;
    } else return 0;
  }
}

const pq = new MaxHeap();
const N = Number(input.shift());
const arr = input.map(Number);

const answer = [];
for (let i = 0; i < N; i++) {
  if (arr[i] > 0) {
    pq.insert(arr[i]);
  } else {
    answer.push(pq.remove());
  }
}
console.log(answer.join("\n"));

