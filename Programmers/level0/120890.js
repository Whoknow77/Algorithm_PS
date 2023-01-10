function solution(array, n) {
    let arr2 = array.sort((a,b)=>a-b).map(a=>Math.abs(n-a));
    return array[array.sort((a,b)=>a-b).map(a=>Math.abs(n-a)).indexOf(Math.min.apply(null, arr2))];
}

// 다른 사람 풀이


function solution2(array, n) {
    return array.sort((a,b)=>a-b).map(v=>[Math.abs(n-v),v]).sort((a,b)=>a[0]-b[0])[0][1];
}


