const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

const heap = [];
let size = 0;

const swap = (idx1, idx2) => {
  let tmp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = tmp;
};

const comp = (a, b) => {
  // a 가 클때 true 리턴
  if (Math.abs(heap[a]) === Math.abs(heap[b])) {
    if (heap[a] > heap[b]) return true;
    else return false;
  } else if (Math.abs(heap[a]) > Math.abs(heap[b])) {
    return true;
  } else {
    return false;
  }
};

const push = (x) => {
  if (size === 0) heap[1] = x;
  else {
    let pos = size + 1;
    heap[pos] = x;
    while (comp(Math.floor(pos / 2), pos) && pos !== 1) {
      swap(pos, Math.floor(pos / 2));
      pos = Math.floor(pos / 2);
    }
  }
  size++;
};

const top = () => {
  if (size === 0) return 0;
  return heap[1];
};

const pop = () => {
  if (size === 0) return;
  let pos = 1;
  heap[pos] = heap[size];
  heap.pop();
  while (
    (heap[pos * 2] && comp(pos, pos * 2)) ||
    (heap[pos * 2 + 1] && comp(pos, pos * 2 + 1))
  ) {
    if (comp(pos * 2, pos * 2 + 1)) {
      swap(pos, pos * 2 + 1);
      pos = pos * 2 + 1;
    } else {
      swap(pos, pos * 2);
      pos = pos * 2;
    }
  }
  size--;
};

let res = "";

for (let i = 1; i <= N; i++) {
  let num = +input[i];

  if (num === 0) {
    res += top() + "\n";
    pop();
  } else {
    push(num);
  }
}
console.log(res);
