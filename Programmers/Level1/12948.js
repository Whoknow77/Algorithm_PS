
// substr(a,b) : a부터 b개
function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.substr(-4,4);
}


// 다른 사람 풀이
// x(?=y) : 오직 y가 뒤따라오는 'x'에만 대응

function solution2(s) {
    return s.replace(/\d(?=\d{4})/g,'*');
  }


console.log(solution2("01033331234"));

