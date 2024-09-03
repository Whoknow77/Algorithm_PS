const getCombination = (ary,n) => {
  let ret = []
  if (n===1) return ary.map(v => [v])
  
  ary.forEach((fixed,idx,ori) => {
      const rest = ori.slice(idx+1)
      const combinations = getCombination(rest,n-1)
      const attached = combinations.map(v => [fixed,...v])
      ret.push(...attached) 
  })
  return ret
}

// [1]
// [2,3],[2,4]
// [1,2,3], [1,2,4]


function solution(relation) {
  relation = relation.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),[]);
  
  const ret = []
  
  for (let i = 1 ; i <= relation.length ; i++) {
      const comAry = getCombination(relation,i)
      
      for (const ary of comAry) {         
        // [100,200,300,400,500,600]
          let newAry = new Array(ary[0].length).fill("")
          for (let j = 0 ; j < ary.length ; j++){
            for (let k = 0 ; k < ary[0].length ; k++) {
              newAry[k] += " " + ary[j][k]
            }
          }
          
          const set = new Set(newAry)
          if(set.size === newAry.length) {
              const idxAry = ary.map(v => relation.indexOf(v))
              if(!ret.some(v => v.every(el => idxAry.includes(el)))){
                  ret.push(idxAry)
              }
          }
      }
  }
  
  return ret.length
}


console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]))
