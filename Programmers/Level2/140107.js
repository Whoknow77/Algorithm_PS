function solution(k, d) {
  let sum=0
  // x좌표만 보고 원의 y좌표 최솟값
  for(let x=0; x<=d; x+=k){
    const y = Math.floor(Math.sqrt(d*d - x*x))
    sum+=Math.floor(y/k)+1
  }
  return sum
}

console.log(solution(2,4))

// 원점으로부터 거리 = 루트(x^2+y^2) <=d 인점들만 return

// 원점을 제외하고 대각선으로 잘라서 생각해서 대칭하면 시간복잡도 반으로

// k가 1000000 만이면 최악의 경우 계산과정에서 1000000^2 -> 1000000000000?
// 대충봐도 천억이 넘어가서 여기서 문제가 발생함
// 거리를 계산할때 피타고라스가 아닌 다른방법?
