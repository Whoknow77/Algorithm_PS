function solution(numbers) {
    let answer=[];
    arr={
        "zero":0,
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        
    };

    while(numbers.length!==0){
        
        // 뜻이 존재한다면
        if(arr[[...numbers].splice(0,3).join('')]!==undefined){
            answer.push(arr[[...numbers].splice(0,3).join('')]);
            numbers=numbers.substring(3);
            console.log(numbers);
        }

        // 4개씩 읽었는데 뜻이 있을때
        if(arr[[...numbers].splice(0,4).join('')]!==undefined){
            answer.push(arr[[...numbers].splice(0,4).join('')]);
            numbers=numbers.substring(4);
            console.log(numbers);
        }

        if(arr[[...numbers].splice(0,5).join('')]!==undefined){
            answer.push(arr[[...numbers].splice(0,5).join('')]);
            numbers=numbers.substring(5);
            console.log(numbers);
        }
    }

    return Number(answer.join(''));
}

// 다른 사람 풀이

function solution2(numbers) {
    const numMap = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

    for(const [key, val] of Object.entries(numMap)) {
        numbers = numbers.replaceAll(key, val);
    }

    return +numbers;
}


function solution3(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    return +arr.reduce((result, number) => {
        return result.replaceAll(number, arr.indexOf(number));
    }, numbers);
}

function solution4(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}

function solution5(numbers) {
    var answer = 0;
    const alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i =0;i<alpha.length;i++){
        numbers=numbers.split(alpha[i]).join(i);
    }
    return Number(numbers);
}

function 5(numbers) {
    var answer = 0;
    const alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i =0;i<alpha.length;i++){
        numbers=numbers.split(alpha[i]).join(i);
    }
    return Number(numbers);
}

console.log(solution5("onefourzerosixseven"));