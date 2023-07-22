const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input[0].split(' ').map(Number).sort((a,b)=>a-b);
let sum=0;
// 1 2 3 3 4
let answer=[];
for(let i=0; i<n; i++){
    sum+=arr[i];
    answer.push(sum);
}
console.log(answer.reduce((a,b)=>a+b,0));
