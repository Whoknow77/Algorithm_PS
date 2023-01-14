function solution(A, B) {
    let answer=-1;
    A=A.split('');
    for(let i=0; i<A.length; i++){
        if(B===A.join('')){
            return answer+1;
            }
        A.unshift(A.pop());
        answer++;
    }
    return -1;
}

// 다른 사람 풀이

// 두개이어서 인덱스조사
function solution2(A,B){
    return (B+B).indexOf(A);
}

function solution3(A,B) {
    // 맨뒤 + 맨앞에서 맨뒤-1까지 문자열 더함
    const pushRight = str => [str[str.length - 1], ...str.slice(0, str.length - 1)].join('');
    for (let i = 0; i <= A.length; i++) {
      if (A === B) return i;
      A = pushRight(A);
    }
  
    return -1;
  }
