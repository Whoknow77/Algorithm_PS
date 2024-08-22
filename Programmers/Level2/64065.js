function solution(s) {
  const reg = /\{(.+?)\}/g;
  const arr=s.slice(1,s.length-1).match(reg).map((el)=>
    el.slice(1,el.length-1).split(',').map(Number)
)

  const set=new Set()

  arr.sort((a,b)=>a.length-b.length).forEach((subarr)=>{
    subarr.forEach((item)=>{
      set.add(item)
    })
  })  
  return [...set]
  
}
console.log(solution("{{20,111},{111}}"))


// ?를 통해 가능한 한 적게 매칭(이거 안쓰면 통째로 반환됨..)
// 원소의 길이를 기준으로 오름차순 정렬
// 각 원소의 내부를 탐색하면서 set에 하나씩 다 때려넣고 반환
