function solution(arr, divisor) {
    let answer = arr.filter(a=>a%divisor===0).sort((b,c) => b-c);
    return answer.length ===0 ? [-1] : answer;
}
