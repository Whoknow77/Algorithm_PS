const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [number, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input=input.toString().split(' ').map(Number).sort((a,b)=>a-b);
const min = input[0];
const max = input[input.length-1];
let answer=0;
let ln = input.length;
if(ln===1){
    answer=min*min;
}
else{
    answer=max*min;
}

console.log(answer);

