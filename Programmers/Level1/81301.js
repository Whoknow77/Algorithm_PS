// key, value로 대응시킨 후, 객체를 순회하며 s에 객체가 존재하면 숫자로 replace했다.
function solution(s) {
    const object = {
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9,
    };
    const keys = Object.keys(object);
    keys.map(str=> {
        if(s.includes(str)){
            s=s.replaceAll(str,object[str]);
        }
    });
    return +s;
}


// 다른 사람 풀이

// 0부터 9까지 순회하며 해당하는 영단어가 있으면 그 부분을 공백으로 split후 join으로 숫자 끼워넣기
// 영단어가 없으면 애초에 공백이 생기지 않으므로 join해도 숫자가 들어가지 않음
function solution2(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}