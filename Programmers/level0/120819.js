function solution(money) {
    let answer = [];
    answer.push(parseInt(money/5500));
    answer.push(money%5500);
    return answer;
}

function solution2(money) {
    return [(parseInt(money/5500)), money%5500];
}