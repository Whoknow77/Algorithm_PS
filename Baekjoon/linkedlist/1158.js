const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);

// 원형 연결리스트
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.size = 0;
  }

  insert(data) {
    const newNode = new Node(data);

    // 리스트가 비어있을 때, 새 노드가 head이자 tail이다.
    if (this.tail === null) {
      // 노드가 없다면 tail이 가리키는 곳이 null이다.
      this.tail = newNode; // tail을 새 노드를 가리키도록 주소를 할당한다.
      this.tail.next = newNode; // tail.next(=head)에 새 노드를 할당한다.
    }

    // 리스트에 노드가 있을 때, 기존 tail자리에 새 노드를 넣는다.
    else {
      newNode.next = this.tail.next; // 새 노드 다음에 head노드 연결한다.
      this.tail.next = newNode; // 새 노드를 현재 tail의 다음으로 연결한다.
      this.tail = newNode; // 새 노드를 tail로 지정한다.
    }
    this.size += 1;
    return;
  }

  remove(k) {
    let previousNode,
      removedNode = this.tail;
    let removedData;

    // 꼬리노드에서 k번 앞으로 나아간 지워야할노드 removedNode를 구한다.
    // 지워야할노드의 이 전 노드 previousNode를 구한다.
    for (let i = 0; i < k; i++) {
      previousNode = removedNode;
      removedNode = removedNode.next;
    }

    removedData = removedNode.data;
    previousNode.next = removedNode.next;
    this.tail = removedNode; // 다음 반복을 위해 지워진 노드를 tail로 지정한다.
    this.size -= 1;

    return removedData;
  }
}

const linkedList = new LinkedList();
for (let i = 1; i <= N; i++) {
  linkedList.insert(i);
}

let answer = "";
for (let i = 0; i < N; i++) {
  answer += linkedList.remove(K) + ", ";
}

console.log(`<${answer.slice(0, -2)}>`);
// 1  4
