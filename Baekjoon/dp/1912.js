const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const length = input.shift();
const arr = input[0].split(' ').map(Number);
let best = arr[0];
let sum=0;
for(let i=0; i<length; i++){
    sum=Math.max(arr[i],sum+arr[i]);
    best=Math.max(sum,best);
}
console.log(best);

