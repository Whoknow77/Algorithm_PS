function solution(my_string, n) {
    let answer = '';
    for(let i=0; i<my_string.length; i++){
        for(let j=0; j<n; j++){
            answer+=my_string[i];
        }
    }
    return answer;
}


function solution2(my_string, n){
    return [...my_string].map(item=>item.repeat(n)).join('');
}
