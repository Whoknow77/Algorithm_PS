function solution(i, j, k) {
    let answer=0;
    let arr=Array(j-i+1).fill(i).map((a,b)=>(a+b).toString());
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            if(Number(arr[i][j])===k){
                answer++;
            }
        }
    }
    return answer;
}

// 다른 사람 풀이
// 숫자로 이루어진 배열을 join('').split('')하면 문자열로 이루어진 하나씩 쪼개진 배열이 생성된다.

function solution2(i, j, k){

    var answer = [];
    for(let a = i;a<=j;a++){
        answer.push(a);
    }
    return answer.join("").split("").filter(a=>a==k).length;
}

function solution3(i,j,k){
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }
    return a.split(k).length-1;
}

console.log(solution3(1,13,1));
