function solution(s) {
    if(s.length%2===0){
        return [s[parseInt(s.length/2)-1],s[parseInt(s.length/2)]].join('');
        
    }

    else{
        return s[parseInt(s.length/2)];

    }
}

// 다른 사람 풀이

function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
