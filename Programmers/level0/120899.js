function solution(array) {
    let answer=[];
    answer.push(Math.max.apply(null, array));
    answer.push(array.indexOf(Math.max.apply(null, array)));
    return answer; 
}

// 다른 사람 풀이

function solution2(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}
