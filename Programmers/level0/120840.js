function solution(balls, share) {
    if(balls==share){
        return 1;
    }
    else{
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
    }
}


function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

// Math.round(왜 반올림..?)

//  https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98


// 다른 사람 풀이
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

function solution2(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
}

