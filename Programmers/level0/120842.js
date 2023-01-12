
function solution(num_list, n){
let arr = new Array(num_list.length/n);

for (let i = 0; i < arr.length; i++) {
    arr[i]= num_list.slice(n*i,n*i+n);
}
return arr;
}


// 다른 사람 풀이

function solution(num_list, n) {
    let answer = [];
    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}



console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948],3));