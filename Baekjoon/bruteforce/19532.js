const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a,b,c,d,e,f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let x=0;
let y=0;
for(let i=-999; i<=999; i++){
    for(let j=-999; j<=999; j++){
        if((a*i)+(b*j)===c && (d*i)+(e*j)===f){
            x=i;
            y=j;
        }
    }
}
console.log(x, y);