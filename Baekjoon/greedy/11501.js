const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

for (let i = 0; i <N*2; i+=2) {
  const n = Number(input[i]);
  const arr = input[i + 1].split(' ').map(Number);
  let sum=0;
  let last=arr[arr.length-1];
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i]<last){
        sum+=last-arr[i];
    }
    else{
        last=arr[i];
    }
  }
  console.log(sum);
}

// 3
// 3
// 10 7 6
// 3
// 3 5 9
// 5
// 1 1 3 1 2
