function solution(my_string) {
    let answer=0;
    let num = my_string.split(/[\D]/g).map(a=>+a).filter(item=>item!==0);
    let ps=my_string.match(/[\D]/g).filter(a=>a!==' ');
    for(let i=0; i<ps.length; i++){
        if(ps[i]==='+'){
            if(i===0){
            answer+=(num[i]+num[i+1]);
            }
            else{
                answer+=num[i+1];
            }
        }
        else{
            if(i===0){
            answer+=(num[i]-num[i+1]);
            }
            else{
                answer+=-num[i+1];
            }
        }
    }
    return answer;
}


// 다른 사람 풀이

function solution2(my_string){
    return eval(my_string);
}


function solution3(my_string) {
    const arr = my_string.split(' ');
    while(arr.length > 1){
    arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
    }
    return arr[0]
}

console.log(solution("3 + 4"));

