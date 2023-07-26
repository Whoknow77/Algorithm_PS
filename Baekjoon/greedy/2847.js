const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input.map(Number)
// 거꾸로
let sum=0;
for(let i=arr.length-1; i>0; i--){
    if(arr[i]<=arr[i-1]){
        let minus = arr[i-1]-arr[i]+1;
        sum+=minus;
        arr[i-1]=arr[i-1]-(minus);
        
    }
}
console.log(sum)
