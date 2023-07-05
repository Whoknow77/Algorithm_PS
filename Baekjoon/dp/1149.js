const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const arr=[];
for(let i=0; i<n; i++){
    const color = input[i].split(' ').map(Number);
        arr.push(color)
}

for(let i=1; i<n; i++){
    arr[i][0]= arr[i][0]+Math.min(arr[i-1][1], arr[i-1][2]);
    arr[i][1]= arr[i][1]+Math.min(arr[i-1][0], arr[i-1][2]);
    arr[i][2]= arr[i][2]+Math.min(arr[i-1][0], arr[i-1][1]);
}
console.log(Math.min(...arr[n-1]))
