function solution(rsp) {
    let answer='';
    rsp.split('').map((item) => {
        if(item==='2'){
            answer+='0';
        }
        else if(item==='0'){
            answer+='5';
        }

        else if(item==='5'){
            answer+='2';
        }
    }).join('');
    return answer;
}
// 가위 바위 보
//   2   0   5


// 다른 사람 풀이

// 객체(key : value 이용)
function solution2(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}

// 삼항
function solution3(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("");
}

