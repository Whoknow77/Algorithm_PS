const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let [a,b,c]=[0,1,1];
temp=0;
for(let i=0; i<Number(input); i++){
    a = b % 1000000007
    b = c % 1000000007
    c = a + b
}

console.log(a);