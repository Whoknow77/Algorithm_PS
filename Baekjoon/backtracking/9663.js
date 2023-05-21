const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());

const isused1=Array(40).fill(0);
const isused2=Array(40).fill(0);
const isused3=Array(40).fill(0);

let cnt=0;

function dfs(cur){
    if(cur===n){
        cnt++
        return;
    }

    for(let i=0; i<n; i++){
        if(isused1[i] || isused2[i+cur] || isused3[Math.abs(cur-i)]){
            continue;
        }

        isused1[i]=1;
        isused2[cur+i]=1;
        isused3[Math.abs(cur-i)]=1;
        dfs(cur+1);
        isused1[i]=0;
        isused2[cur+i]=0;
        isused3[Math.abs(cur-i)]=0;
    }
}

dfs(0);
console.log(cnt);