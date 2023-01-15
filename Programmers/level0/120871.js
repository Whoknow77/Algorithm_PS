function solution(n) {
    let num = 0
    // n까지 반복
    for(let i = 1 ; i <= n ; i ++) {
        // i에 증가에 따른 x3의 증가
        num++
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while(num.toString().includes('3') || num%3 === 0) {
            console.log(num);
            num++
        }
    }
    return num;
}