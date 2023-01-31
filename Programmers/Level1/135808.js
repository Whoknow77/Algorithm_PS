// while문 대신 for문으로 돌리니 통과
function solution(k, m, score) {
    const array=score;
    if(array.length<m){
        return 0;
    }
    array.sort((a,b) => b-a);
    let scores=[];
    for(let i=0; i<parseInt(array.length/m); i++){
        scores.push(array.slice(i*m,i*m+m));
    }
    return scores.map(item=> item[item.length-1]*m).reduce((a,b) => a+b);
}

function solution2(k, m, score) {
    let answer = 0;
    const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
    console.log(sortedScore);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

console.log(solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
