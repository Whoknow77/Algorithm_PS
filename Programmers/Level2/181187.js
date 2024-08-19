function solution(r1, r2) {
  let count=0
  for(let i=1; i<r2; i++){
    const start = Math.ceil(Math.sqrt((r1*r1)-(i*i)))  
    const end =  Math.floor(Math.sqrt((r2*r2)-(i*i)))
    if(isNaN(start)){
      count+=(end+1)
    }
    else{
      count+=(end-start+1) 
    }
    // console.log(start,end)
  }
  return (count*4)+4
}

// 다른 풀이
function solution(r1, r2) {
  let answer = 0;
  for (let x=1;x<=r2;x++) {
    const min = r1 >= x ? Math.ceil(Math.sqrt(r1*r1-x*x)) : 0;
    const max = Math.floor(Math.sqrt(r2*r2-x*x));
      answer += max-min+1;
  }
  return 4*answer;
}

console.log(solution(2,3))


// 2 3 -> 3 2
// 2 4 -> 7 3
// 3 4 -> 4 2
// 2 5 -> 14 4
// 3 5 -> 11 3
