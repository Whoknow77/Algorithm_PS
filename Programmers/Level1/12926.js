//   대 소문자로 나누고 n을 더한 아스키코드 값이 알파벳 범위 밖이라면
//   벗어난 만큼 알파벳처음으로 돌아가서 더해준다.
function solution(s, n) {
    return [...s].map(ch => 
            {
                // 대문자
                if((ch.charCodeAt()+n>=91 && ch.charCodeAt()<=96)){
                    return String.fromCharCode(((ch.charCodeAt()+n) % 90)+64);                   
                }
                else if((ch.charCodeAt()+n>=65 && ch.charCodeAt()<=90)){
                    return String.fromCharCode(ch.charCodeAt()+n);
                }

                else if(ch===' '){
                    return ' ';
                }
                // 소문자

                else{
                    if(ch.charCodeAt()+n>=123){
                        return String.fromCharCode(((ch.charCodeAt()+n) % 122)+96);
                    }
                    return String.fromCharCode(ch.charCodeAt()+n);
                }
        }).join('');
}

// 다른 사람 풀이
// 위의 로직과 동일
function solution2(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i =0; i <s.length; i++){
        let text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}


// 두번 써서 해결(좋은 방법 이나 1<=n<=25 일때만 가능)
function solution3(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY"
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}


