// 다른 사람 풀이

function solution(strings, n) {
    return strings.sort((a,b) => {
        if(a[n]>b[n]){
            return 1;
        }
        else if(a[n]<b[n]){
            return -1;
        }

        // 같을 때는 전체비교

        if(a<b){
            return -1;
        }
        else if(a>b){
            return 1;
        }
    });
}

function solution2(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
