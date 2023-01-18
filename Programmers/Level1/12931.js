
// toString()을 이용해 숫자 => 문자열반환
function solution(n)
{
    return n.toString().split('').map(a=>+a).reduce((prev,curr) => prev+curr, 0);
}


// 다른 사람 풀이

//  숫자+"" ==> 문자열 (123 => '123')
// 괄호주의!
function solution2(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

console.log(solution2(123));