function solution(my_str, n) {
    return [...my_str].map((a,b)=>[...my_str].splice(b*n,n).join(''));
}


// 다른 사람 풀이

function solution2(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n)
     res.push(my_str.slice(i, i+n));
    return res;
}

console.log(solution("abc1Addfggg4556b", 6));


