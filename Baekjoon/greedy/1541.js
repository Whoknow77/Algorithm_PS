const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr= input[0].split('-');
let sum=arr.shift().split('+').map(Number).reduce((a,b)=>a+b,0);
for(let i=0; i<arr.length; i++){
    sum-=arr[i].split('+').map(Number).reduce((a,b)=>a+b,0);
}
console.log(sum);