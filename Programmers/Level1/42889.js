// 2차원 배열을 이용한 풀이
function solution(N, stages) {
    // [스테이지, 클리어 못한 플레이어 수, 스테이지에 도달한 플레이어의 수]
    let noClearPlayer=[];
    let playerNumber = stages.length;

    for(let i=1; i<=N; i++){
        noClearPlayer.push([i,stages.filter(num=> num===i).length,playerNumber]);
        playerNumber -= stages.filter(num=> num===i).length;
    }

    return noClearPlayer.sort((a,b) => b[1]/b[2] - a[1]/a[2]).map(item=>item[0]);
}

// 다른 사람 풀이
// 실패율을 담는 result 배열 이용
// 분모 = x>=i, 분자 = x === i
function solution2(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
