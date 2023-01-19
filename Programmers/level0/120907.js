function solution(quiz) {
    let opr='';
    let result=0;
    let x=0;
    let y=0;
    let answer=[];

   answer=quiz.map((str,b)=>{
        opr = str.match(/[\D]\s/g); // 중간 연산자
        result = quiz.map(str => str.split(' ').map(a=>a*1).filter(item=>Number.isInteger(item)))[b][2]; // 결과 값
        x=quiz.map(str => str.split(' ').map(a=>a*1).filter(item=>Number.isInteger(item)))[b][0]; // 첫번째 숫자
        y=quiz.map(str => str.split(' ').map(a=>a*1).filter(item=>Number.isInteger(item)))[b][1]; // 두번째 숫자
        if(opr==='-'){
            return result===x-y? "O" : "X";
        }
        else{
            return result===x+y ? "O" : "X";
        }
    });

    return answer;
}

// 다른 사람 풀이


function solution2(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');
        
        // 문자 앞에 +는 숫자로 만들어 주려고
        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));


객체.addEventListener('click', add);

add(e){
    e -> event

}

