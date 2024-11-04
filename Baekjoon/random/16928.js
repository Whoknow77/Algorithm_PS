const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const visited = Array(101).fill(false);
const arr = Array.from({ length: 101 }, (_, idx) => idx); 


for (let i = 0; i < n + m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr[x] = y;
}

const bfs = () => {
  const queue = [[1, 0]]; 
  visited[1] = true; 

  while (queue.length > 0) {
    const [cur, curCount] = queue.shift();

    if (cur === 100) {
      return curCount;
    }

    for (let i = 1; i <= 6; i++) {
      let next = cur + i;
      
      if (next <= 100 && !visited[next]) {
        visited[next] = true; 
        queue.push([arr[next], curCount + 1]); 
      }
    }
  }
};

console.log(bfs());
