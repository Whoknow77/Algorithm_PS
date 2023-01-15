
// 선분마다 시작~끝-1 까지 배열을 채워나가고, 배열의 값이 2이상부터 겹치는것이므로 2인 칸들의 개수를 더해주면 됨(인덱스에 -이 들어가면안되니까 100더함)
function solution(lines) {
    let arr=Array(200).fill(0);
    let answer=0;

    for(let i=0; i<lines.length; i++){
        for(let j=lines[i][0]+100; j<lines[i][1]+100; j++){
            arr[j]++;
        }
    }
    return arr.filter(a=>a>1).length;
}


// 논리 동일함


function solution2(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}


console.log(solution([[0, 1], [2, 5], [3, 9]]));



// 제일 큰 좌표 - 제일 작은 좌표만큼 반복한다
// 선분마다(1,5)라면 1,2,3,4,5를 가지는 배열을 만든다.
// 각 좌표마다 세개의 선분을 조사해 겹치는 숫자가
// 1개 => 길이0, 2개 => 길이1, 3개 => 길이2, ...
