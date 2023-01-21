// map을 사용하여 안에서 약수개수 조사

function solution(left, right) {
    return Array(right-left+1).fill(left).map((a,b) => a+b).map((num=>{
        let measure_num=0;
        for(let i=1; i<=num; i++){
            if(num%i===0){
                measure_num++;
            }
        }
        if(measure_num%2===0){
            return num;
        }
        else{
            return -num;
        }
    })).reduce((prev,curr) => prev+curr, 0);
}

// 다른 사람 풀이
// 제곱근이 정수면 약수의 개수가 홀수다

function solution2(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
