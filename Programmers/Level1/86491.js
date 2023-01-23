// 큰 값 중에서 최대값 * 작은 값 중에서 최대 값
function solution(sizes){
    let w = [];
    let h = [];
    sizes.map((v,i) => {
      w[i]=Math.max(...v)
      h[i]=Math.min(...v)
    });
    return Math.max(...w)*Math.max(...h);
  }

// 다른 사람 풀이

// 같은 논리
function solution2(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
