const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const arr=[];
for(let i=0; i<N; i++){
    const[age, name]=input[i].split(' ');
    const smallarr=[];
    smallarr.push(Number(age));
    smallarr.push(name);
    smallarr.push(i);  
    arr.push(smallarr);
}
arr.sort((a,b)=>{
    return a[0]-b[0];
})
for(let i=0; i<arr.length; i++){
    console.log((arr[i][0]), arr[i][1])
}
