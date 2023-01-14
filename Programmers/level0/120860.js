function solution(polynomial) {
   
    let number=polynomial.split('+').sort().join(',').match(/[0-9]*\b/g);
    let sum=number.map(a=>a*1).reduce((a,b)=>a+b);
    let sum2=0;

    let alpha= polynomial.split('+').sort().join(',').replace(/\s/g, "").split(',')
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

    console.log(solution("22 + 5x + x + x + x"));

// polynomial.split('+').sort().join(',').replace(/\s/g, "").split(',') .map(a=>a.match(/^[\d]*\x$/g))
//     .filter(item=>item!==null).map(z=>z.join('').replace(/\s/g, "")).map(v=>v.replace('x', ' ')).map(f=>f*1).reduce((d,f)=>d+f);