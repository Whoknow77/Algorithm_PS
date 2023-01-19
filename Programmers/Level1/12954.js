function solution(x, n) {
    return Array(n).fill(x).map((a,b) => a+b*x);
}

function solution2(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
