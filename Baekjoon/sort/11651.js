const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = [];
for (let i = 0; i < N; i++) {
    const [a,b] = input[i].split(' ').map(Number);
  arr.push([a,b]);
}
arr.sort((a,b)=>{
    if(a[1]<b[1]){
        return -1;
        }
    else if(a[1]>b[1]){
        return 1;
    }
    else{
        if(a[0]>=b[0]){
            return 1;
        }
        else{
            return -1;
        }
    }
});

let str='';
for(let i=0; i<N; i++){
    str+=`${arr[i][0]} `;
    str+=`${arr[i][1]}\n`;
}
console.log(str)

