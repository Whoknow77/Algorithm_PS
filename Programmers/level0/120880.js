function solution(numlist, n) {
    return numlist.sort((a,b) => {
        console.log(Math.abs(a-n));
        console.log(Math.abs(b-n));
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b-a
        // 다르다면 거리별 오름차순 정렬
        return aGab-bGab
    })
}


function solution2(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b-a);
  }


console.log(solution2([1,2,3,4,5,6],4));

