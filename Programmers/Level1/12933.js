function solution(n) {
   return Number(n.toString().split('').sort((a,b)=>b-a).join(''));
}

// 다른 사람 풀이
// n+"" ==> 연산시 자동으로 문자열로 변환

function solution2(n) {
    return parseInt((n+"").split("").sort().reverse().join(""));
}

