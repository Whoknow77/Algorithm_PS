// 이중 for문 사용하여 1이 하나라도 있을경우 '#'
function solution(n, arr1, arr2) {
    let arr1_binary =[];
    let arr2_binary =[];
    arr1.map(item=>arr1_binary.push(item.toString(2).padStart(n,'0'))); // padStart(자리수, 빈 자리에 넣을숫자)
    arr2.map(item=>arr2_binary.push(item.toString(2).padStart(n,'0')));

    let arr_answer=[[]];
    for(let i=0; i<n; i++){
        arr_answer[i]=[];
        for(let j=0; j<n; j++){
            if(arr1_binary[i][j]==='1' || arr2_binary[i][j]==='1'){
                arr_answer[i]+='#';
            }
            else{
                arr_answer[i]+=' ';
            }
        }
    }
    return arr_answer;
}

// 다른 사람 풀이

// 비트연산자 사용(addZero를 이용하여 앞에 0 껴넣기)
// (10진수 | 10진수) ==> 비트연산을 한 후 10진수로 반환함
function solution2(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    
    return '0'.repeat(n - s.length) + s;
}
// 비트연산자 사용(padStart사용)
let solution3=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
