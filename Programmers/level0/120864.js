function solution(my_string) {
    if((my_string.match(/[\0-9]+/g))===null){
        return 0;
    }

    else{
    return my_string.match(/[\0-9]+/g).map(num=>+num).reduce((a,b) => a+b);
    }
}


// 다른 사람 풀이


function solution2(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

function solution3(my_string) {
    return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b);
}

// ' ', '12' , '1', ' ' 를 map(v=>v*1)을 하면 공백은 0으로, 숫자스트링은 숫자로 바뀜

console.log(solution3("aAb1B2cC34oOp"));
