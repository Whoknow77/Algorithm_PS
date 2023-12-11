const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(' ').map(Number);
const arr = [];
const newArr = [];
let idx = 0;

for(let i = 1; i<=N; i++){
    arr[i] = i;
}

arr.splice(0, 1);


while(arr.length>0){

  // 삭제할 인덱스 계산
        idx = (idx + K -1) % arr.length;
        // 3 2 6
        newArr.push(arr[idx]);
        arr.splice(idx,1);
    }


console.log(`<${newArr.join(', ')}>`)