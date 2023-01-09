function solution(n) {
    let answer=[];
    for(let i=1; i<=n; i++){
    if(n%i===0){
        answer.push(i);
    }
    }
    return answer;
}

// 다른 사람 풀이

function solution(n) {
    return Array(n).fill(1).map((a,b) => a+b).filter(item=>n%item===0);
}

console.log(solution(29));