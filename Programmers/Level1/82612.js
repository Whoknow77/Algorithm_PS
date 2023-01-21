function solution(price, money, count) {
    const cost=Array(count)
    .fill(price).map((num, index) => num*(index+1))
    .reduce((prev,curr) => prev+curr, 0);
    return cost-money>0 ? cost-money : 0;
}


// 다른 사람 풀이(등차수열의 합 공식)
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
