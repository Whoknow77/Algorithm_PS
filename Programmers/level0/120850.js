function solution(my_string) {
    return my_string.match(/[0-9]/g).sort((a,b) => a-b).map(a=>+a);
}


// !isNaN() ==> 숫자가 아닌게 아니다 => 숫자다