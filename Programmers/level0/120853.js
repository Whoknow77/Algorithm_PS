function solution(s) {
    s=s.split(' ');
    let sum=[];
    for(let i=0; i<s.length; i++){
        if((s[i]==='Z')){
            sum.push(Number(s[i-1])*-1);
        }
        else{
            sum.push(Number(s[i]));
        }
    }
    return sum.reduce((prev,curr)=>prev+curr);
}


// 다른 사람 풀이
function solution2(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s)
    { v === 'Z' ? arr.length ? arr.pop() : ''  : arr.push(v)
}
    return arr.reduce((a,v)=>a+ +v,0);
}
