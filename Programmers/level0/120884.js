function solution(chicken) {
    let coupon=0;
    let sum=0;
    while(coupon<10 && chicken!==0){
        coupon+=parseInt(chicken%10);
        chicken=parseInt(chicken/10);
        if(coupon>=10){
            chicken+=parseInt(coupon/10);
            coupon=parseInt(coupon%10);
        }
        sum+=chicken;
    }
    return sum;
}

// 다른 사람 풀이

function solution2(chicken) {
    let answer = 0; // 주문한 치킨 수 
    let coupon = chicken

    while(coupon >= 10){
        answer = answer + parseInt(coupon/10)
        coupon = parseInt(coupon/10)+ coupon%10
    }

    return answer;
}

function solution3(chicken) {
    var answer = 0;
    while(chicken>=10){
        answer+=parseInt(chicken/10);
        chicken = chicken%10+parseInt(chicken/10);
    }
    return answer;
}


console.log(solution3(1080));
// 108 1
// 10 9
// 1 0