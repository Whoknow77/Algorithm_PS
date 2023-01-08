function solution(my_string){
    return [...my_string].filter((item) => Number.isInteger(+item)).map((i)=>Number(i)).reduce((prev,curr)=>(prev+curr));
}


// 다른 사람 풀이(정규식 표현)
function solution2(my_string){
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}



console.log(solution("1a2b3c4d123"));