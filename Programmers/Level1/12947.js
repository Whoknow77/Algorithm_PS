function solution(x) {
    let sum = (x+"").split('').map(a=>+a).reduce((prev,curr) => prev+curr ,0);
    return x % sum ? false : true;
}
