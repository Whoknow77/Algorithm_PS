const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

// top-bottom
const memo=Array.from({length:Number(input)+1}, i=>0);
function dp(x){

    if(x<=1){
        return 0;
    }
    // memo가 되어있을 때
    else if(memo[x] !==0){
        return memo[x];
    }
    else{
        memo[x]=dp(x-1)+1;
        if(x%3===0){
            memo[x]=Math.min(memo[x],dp(x/3)+1);
        }
        if(x%2===0){
            memo[x]=Math.min(memo[x],dp(x/2)+1);
        }
    }
    return memo[x];
}
console.log(dp(Number(input)));

// bottom-up
// const d=[0];
// d[1]=0;
// // -1, /2, /3 중 최솟값을 넣는다.
// for(let i=2; i<=input; i++){
//     d[i]=d[i-1]+1;
//     if(i%3===0){
//         d[i]=Math.min(d[i],d[i/3]+1);
//     }
//     if(i%2===0){
//         d[i]=Math.min(d[i],d[i/2]+1);
//     }
// }
// console.log(d[Number(input)])


// 1 => 0
// 2 => 1
// 3 => 1
// 4 2 1 => 2
// 5 4 2 1 => 3
// 6 2 1 => 2
// 7 6 2 1 => 3
// 8 4 2 1 => 3
// 9 3 1 => 2
// 10 9 3 1 => 3