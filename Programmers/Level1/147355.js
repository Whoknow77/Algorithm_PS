function solution(t, p) {

    return t.split('')
    .map((num, index) => t.slice(index, index+p.length))
    .filter(item => item.length===p.length)
    .map(a => +a).filter(b => b<=p).length;
}

// 다른 사람 풀이

function solution2(t, p){
    let count=0;
    for(let i=0; i<=t.length-p.length; i++){
        let value = t.slice(i, i+p.length);
        if(+p >= +value){
            count++;
        }
    }
    return count;
}

