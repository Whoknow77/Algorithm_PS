// 2e = 2 * 10
// 2e5 = (2*10)의 5제곱

function solution(s) {
    // 문자가 존재하면 !false => true
    // 존재하지 않으면 !true => false
    return ((s.length===4 || s.length ===6) && (!s.match(/\D/g))) ? true : false;
}


// 다른 사람 풀이

function solution2(s){
    // 4자리 또는 6자리 정수로 시작해서 정수로 끝
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }

function solution3(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}