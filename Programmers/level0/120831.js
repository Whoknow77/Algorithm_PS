function solution(n){
    let answer=0;
    for(let num=0; num<=n; num++){
        if(num%2===0){
            answer+=num;
        }
    }
    return answer;
}