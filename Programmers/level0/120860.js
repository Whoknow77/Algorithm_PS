function solution(dots) {
    let x=dots.map(a=>a[0]).sort();
    let y=dots.map(b=>b[0]).sort();
    console.log(x);
    console.log(y);
    if(!x[3]===x[0] && !y[3]===y[0]){
    return (x[3]-x[0])*(y[3]-y[0]);
    }
    else{
        if(x[3]===x[0]&&y[3]===y[0])
    }

}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]));