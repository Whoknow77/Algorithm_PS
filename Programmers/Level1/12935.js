function solution(arr) {
    if(arr.length===1){
        return [-1];
    }
    return arr.filter(a=>Math.min.apply(null,arr)!==a);
}

function solution2(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)),1)
    return arr.length ? arr : [-1];
}
