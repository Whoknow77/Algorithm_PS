function solution(polynomial) {
   
    // \b는 문자와 비문자의 경계
    let number=polynomial.split('+').sort().join(',').match(/[\d]*\b/g);
    let sum=number.map(a=>a*1).reduce((a,b)=>a+b);
    let alpha= polynomial.split('+').sort().map(a=>a.trim())
    .map(a=>a.match(/^[\d]*\x$/g)).filter(item=>item!==null).join(' ').split(' ').map(z=>
        {
            if(z[0]==='x'){
                return z.replace(z[0], '1x');
            }
            else{
                return z;
            }
        }).map(c=>c.replace('x', '')).map(n=>n*1).reduce((r,t)=>r+t);

if(alpha===0){
    return sum.toString();
}
   if(sum===0){
    if(alpha===1){
        return 'x'.toString();
    }
    return alpha+"x".toString();
   }
   else{
    if(alpha===1){
        alpha='';
    }
    return alpha+"x "+ "+ "+ sum.toString();
   }
}

console.log(solution("3x + x + x + 9"));




