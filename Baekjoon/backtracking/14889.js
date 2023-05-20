const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr=[];
for(let i=0; i<n; i++){
    const num = input.shift().split(" ").map(Number);
    arr.push(num);
}


let min = Infinity;
let isused = Array(n).fill(0);

function dfs(index, isused, k) {
  if (index === Number(n / 2)) {
    let start=[];
    let link=[];
    let StartTeam=[];
    let LinkTeam=[];
    let StartScore=0;
    let LinkScore=0;
    for(let i=0; i<isused.length; i++){
        if(isused[i]){
            start.push(i);
        }
        else{
            link.push(i);
        }
    }

    
    for(let i=0; i<start.length; i++){
        for(let j=i+1; j<start.length; j++){
            StartTeam.push([start[i],start[j]]);
        }
    }
    
    for(let i=0; i<link.length; i++){
        for(let j=i+1; j<link.length; j++){
            LinkTeam.push([link[i],link[j]]);
        }
    }


    for(let i=0; i<StartTeam.length; i++){
        const [x,y] = StartTeam[i];
        StartScore += arr[x][y];
        StartScore += arr[y][x];
    }

    for(let i=0; i<LinkTeam.length; i++){
        const [x,y] = LinkTeam[i];
        LinkScore += arr[x][y];
        LinkScore += arr[y][x];
    }

    result=Math.abs(StartScore-LinkScore);

    min = Math.min(min, result);
  }




  for (let i = k; i < n; i++) {
    if (!isused[i]) {
      isused[i] = 1;
      dfs(index+1, isused, i);
      isused[i]=0;
    }
  }

}

dfs(0, isused, 0);

console.log(min);
