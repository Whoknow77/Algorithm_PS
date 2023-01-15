function solution(numer1, denom1, numer2, denom2) {
    let x = denom1 * numer2 + denom2 * numer1;
    let y = denom1*denom2;
    let opr = gcd(x,y);
    return[x/opr, y/opr];
}

function gcd(a,b){
    while(b!=0){
        let temp=parseInt(a%b);
        a=b;
        b=temp;
    }

    return Math.abs(a);
}

// 분모의 최소 공배수 찾기
// 기약분수는 최대공약수가 1이 아닐때 까지 분모/분자를 나눠야 함

// 다른 사람 풀이의 최대공약수 구하는 함수

function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

console.log(solution(1,2,3,4));
