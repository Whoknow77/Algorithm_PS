function solution(common) {
    // 등차수열
    if(common[1]-common[0]=== common[2]-common[1]){
        return common[common.length-1]+common[1]-common[0];
    }
    // 등비 수열
    else{
        return common[common.length-1]*(parseInt(common[common.length-1]/common[common.length-2]));
    }

    // 공비가 1인 등비수열은 공차가 0인 등비수열인데 이건 둘다 해당함
}

console.log(solution([2, 4, 8]));