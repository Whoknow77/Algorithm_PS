const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)[0];
let start=666;
const sixarr=[];
while(true){

    for(let i=0; i<start.toString().length; i++){
        for(let j=0; j<start.toString().length-2; j++){          
            const flag = start.toString().substring(j,j+3);
            if(flag==='666' && !sixarr.includes(start)){
                sixarr.push(start);
            }
        }
    }
    if(sixarr.length===N){
        break;
    }
    start++;
}
console.log(sixarr[N-1]);


// 다른 사람 풀이
// let theNumberAtTheEnd = 665;

// while (input > 0) {
//   theNumberAtTheEnd++;

//   if (theNumberAtTheEnd.toString().includes('666')) {
//     input--;
//   }
// }

// console.log(theNumberAtTheEnd);
