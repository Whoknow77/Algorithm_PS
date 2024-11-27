const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  constructor(start) {
    this.heap = [null];
    this.insert([start, 0]);
  }

  isBiggerThanChildren(idx) {
    let leftChildIdx = 2 * idx;
    let rightChildIdx = 2 * idx + 1;

    if (rightChildIdx < this.heap.length) {
      return (
        this.heap[idx][1] > this.heap[leftChildIdx][1] ||
        this.heap[idx][1] > this.heap[rightChildIdx][1]
      );
    } else if (leftChildIdx < this.heap.length) {
      return this.heap[idx][1] > this.heap[leftChildIdx][1];
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

    while (currentIdx > 1 && this.heap[currentIdx][1] < this.heap[parentIdx][1]) {
      this.swapValue(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  size() {
    return this.heap.length - 1;
  }

  remove() {
    if (this.heap.length > 1) {
      if (this.heap.length === 2) return this.heap.pop();

      const removedVal = this.heap[1];
      this.heap[1] = this.heap.pop();
      let currentIdx = 1;

      while (this.isBiggerThanChildren(currentIdx)) {
        let leftChildIdx = 2 * currentIdx;
        let rightChildIdx = 2 * currentIdx + 1;
        let smallIdx;

        if (
          rightChildIdx < this.heap.length &&
          this.heap[rightChildIdx][1] < this.heap[leftChildIdx][1]
        ) {
          smallIdx = rightChildIdx;
        } else {
          smallIdx = leftChildIdx;
        }

        if (smallIdx >= this.heap.length) break;

        this.swapValue(currentIdx, smallIdx);
        currentIdx = smallIdx;
      }

      return removedVal;
    } else return [null, 0];
  }
}

const [V, E] = input.shift().split(" ").map(Number);
const K = +input.shift();
const graph = {};

for (let i = 1; i <= V; i++) {
  graph[i] = [];
}

for (let i = 0; i < E; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([v, w]);
  
}

function search(start) {
  const distance = Array.from({ length: V + 1 }, () => Infinity);
  distance[start] = 0;
  const pq = new MinHeap(start);
  const visited = Array(V + 1).fill(false);

  

  while (pq.size() > 0) {
    const [curPos, curTime] = pq.remove();
    if (visited[curPos]) continue;
    visited[curPos] = true;
    for (const [nextPos, nextTime] of graph[curPos]) {
      if (distance[nextPos] > curTime + nextTime) {
        distance[nextPos] = curTime + nextTime;
        pq.insert([nextPos, curTime + nextTime]);
      }
    }
  }

  return distance.slice(1).map((v) => (v === Infinity ? "INF" : v));
}

console.log(search(K).join("\n"));
