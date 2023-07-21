const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, money] = input.shift().split(" ").map(Number);
const arr =input.reverse().map(Number)
let sum=0;
arr.forEach((item)=>{
    if(money>=item){
        sum+=parseInt(money/item);
        money=parseInt(money%item);
    }
})
console.log(sum)
