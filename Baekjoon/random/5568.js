const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n=+input.shift()
// const k=+input.shift()
// const card = input.splice(0,n).map(Number)
// const cardSet =new Set()
// let visited=Array(n).fill(0)

// function dfs(count,str){
//   for(let i=0; i<n; i++){
//     if(count===k-1){
//       cardSet.add(str)
//     }
//     if(!visited[i]){
//       visited[i]=1
//       dfs(count+1,str+card[i].toString())
//       visited[i]=0
//     }
//   }
// }

// for(let i=0; i<n; i++){
//   visited=Array(n).fill(0)
//   visited[i]=1
//   dfs(0,card[i].toString())
// }

// console.log(cardSet.size)

// 다른 풀이

const N = +input.shift();
const K = +input.shift();
const arr = input;
const visited = Array.from(({ length: N }, () => false));
let set = new Set();
function dfs(dep, str) {
  if (dep == K) {
    set.add(str);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(dep + 1, str + arr[i]);
      visited[i] = false;
    }
  }
}

dfs(0, "");
console.log(set.size);
