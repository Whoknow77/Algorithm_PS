function solution(n, m) {
    let max=1;

    // 최대 공약수
    for(let i=1; i<=Math.min(n,m); i++){
        if(n % i===0 && m%i===0){
            max=i;
        }
    }

    let min=2;
    // 최소 공배수
    for(let i=2; i<=n*m; i++){
        if(i%n===0 && i%m===0){
            return [max,i];
        }
    }
}

// 다른 사람 풀이

function gcdlcm(a, b) {
    let gcd = calc_gcd(a, b);

    // 최소공배수 = 두수의 곱 / 최대공약수
    let lcm = (a * b) / gcd;
      return [gcd, lcm];
  }
  function calc_gcd(a, b) {
    if (b == 0) return a;
    // 반드시 a<b를 만듬
      return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
  }