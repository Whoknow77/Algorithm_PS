function solution(n) {
    let i=0;
    do{
        i++;
    }while(!(parseInt((i*6)%n)===0));
    return i;
}

// 다른 사람 풀이

function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}