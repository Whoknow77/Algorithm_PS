function solution(number) {
    let sum=0;
    for(let i=0; i<number.length-2; i++){
        for(let j=i+1; j<number.length-1; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k]===0){
                    sum++;
                }
            }
        }
    }
    return sum;
}


console.log(solution2([-3, -2, -1, 0, 1, 2, 3]));