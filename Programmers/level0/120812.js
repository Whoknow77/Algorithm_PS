// 빈도수가 저장된 배열에서 최댓값의 인덱스와 last인덱스가 다른경우(빈도수가 겹침)와 같은경우를 나눔

function solution(array) {
    let numSet=new Set(array);
    let num_arr=[...numSet].map(item=>{
        return array.filter(item2=>item2===item).length;
    });
    let index=num_arr.indexOf(Math.max.apply(null,num_arr));
    let lastindex=num_arr.lastIndexOf(Math.max.apply(null,num_arr));
    if(index!==lastindex){
        return -1;
    }
    else{
        return [...numSet][index];
    }
}

// 다른 사람 풀이

function solution2(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
