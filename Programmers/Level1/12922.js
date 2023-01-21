function solution(n) {
    const str = "수박";
    let answer="";
    let index=0;
    for(let i=0; i<n; i++){
        index=i%2;
        answer+=str[index];
    }
    return answer;
}

// 다른 사람 풀이

function solution2(n){
        return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
    
} 
