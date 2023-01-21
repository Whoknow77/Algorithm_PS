function solution(absolutes, signs) {
    return absolutes.map((num, index)=>{
        if(signs[index] === true){
            return num;
        }
        else{
            return num*-1;

        }
    }).reduce((prev,curr) => prev+curr, 0);
}

// 다른 사람 풀이

function solution2(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
