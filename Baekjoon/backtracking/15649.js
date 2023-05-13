const { KeyObject } = require("crypto");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr=[];
const isused = Array(10).fill(0);

BackTracking(0);

function BackTracking(k){
    if(k===m){
        console.log(arr.join(' '));
        return;
    }
    
    for(let i=0; i<n; i++){
        if(!isused[i]){
            arr.push(i+1);
            isused[i]=1;
            BackTracking(k+1);
            arr.pop();
            isused[i]=0;
        }
    }
}

