const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = parseInt(fs.readFileSync(filePath).toString(), 10);

const d = new Array(input+1).fill(0);
const pre = new Array(input+1).fill(0);
d[1] = 0;

for(let i = 2; i <= input; i++){
    d[i] = d[i - 1] + 1;
    pre[i] = i - 1;
    if(i % 2 ===0){
        d[i] = Math.min(d[i], d[i / 2] + 1);
        pre[i] = i / 2;
    }
    if(i % 3 === 0 && d[i] > d[i / 3] + 1){
        d[i] = Math.min(d[i], d[i / 3] + 1);
        pre[i] = i / 3;
    }
}

console.log(d[input]);
let cur = input;
const answer=[];
while(1){
    answer.push(cur);
    if(cur===1){
        break;
    }
    cur=pre[cur];
}

console.log(pre)
console.log(answer.join(' '))