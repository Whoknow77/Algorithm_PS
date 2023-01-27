// s를 배열로 바꾸고 순회 하면서 처음 나온 문자는 그동안 나왔던 문자를 담는 char배열에 담고, 2번 이상 나온 문자는 현재 인덱스 - 전에 나온 문자의 인덱스를 뺀다.
// 그리고 전에 나온 문자를 ''으로 바꾼다.(아예 삭제를 하면 중간에 빠지는 값이 생김)
// s 문자열을 그대로 배열로 바꾸고 splice를 하면 자른 결과가 반영이 안되므로 반드시 따로 변수를 두어 배열로 저장해야 함

function solution(s) {
    const answer=[...s];
    const char=[];
    return answer.map((ch,index) =>
        {
            if(char.includes(ch)){
                index2 = answer.indexOf(ch);
                answer.splice(index2, 1, '');
                return index - index2; 
            }
            char.push(ch);
            return -1;
        }); 
}

// 다른 사람 풀이
// 객체 사용(문자 : 인덱스), 인덱스를 덮어씌움
function solution2(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}

// lastindexof 이용 '', 'b', 'ba', ... 
function solution3(s){
  return [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
}
