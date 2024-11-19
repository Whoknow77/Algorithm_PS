const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k, p, x] = input[0].split(' ').map(Number);
x = `${'0'.repeat(k - x.toString().length)}${x.toString()}`; // 4자리수인데 x가 23이면 0023 만들기

let num = ['1111110', '0000110', '1101101', '1001111', '0010111', '1011011', '1111011', '0001110', '1111111', '1011111'];
let cnt = 0;

function back(depth, res,curNum) {
    if (depth === n.toString().length + 1) {
        if (curNum>=1 && n >= curNum && curNum !== parseInt(x)){
            cnt++;
        }
        return;
    }
    
    const cur = num[parseInt(x[depth - 1])];
    
    for (let i = 0; i < 10; i++){
        let c = 0;
        for (let j = 0; j < 7; j++)
            if (cur[j] !== num[i][j]){
                c++;
            }
        if (res >= c) {
            back(depth + 1, res-c, curNum*10+i);
        }
    }
}

back(1, p, 0);
console.log(cnt);

// 내 풀이: x에서 dfs로 1~n 사이에 있는 숫자 모두 탐색 -> 실패.. 복잡
// 다른 풀이: x의 왼쪽자리수부터 모든 경우의 숫자와 비교해서 가능할 경우 카운트를 해나가면서 dfs, 길이가 일치하면 개수+1
// 35
