function solution(n, k) {
  let count=0
  const changedNum = n.toString(k)
  const arr =[]
  let stack=[]
  for(let i=0; i<changedNum.length; i++){
    if(changedNum[i]!=='0'){
      stack.push(changedNum[i])
    }
    else{
      arr.push(Number(stack.join('')))
      arr.push(0)
      stack=[]
    }
  }
  arr.push(Number(stack.join('')))


  for(let i=0; i<arr.length; i++){
    if(isPrime(arr[i])){
      if(arr[i-1]===0 && arr[i+1]===0){
        count++
      }
      else if(arr[i+1]===0){
        count++
      }
      else if(arr[i-1]===0){
        count++
      }
      else if(arr[i-1]!==0 && arr[i+1]!==0){
        count++
      }
    }
  }
  return count
}

// 에라~~의 체
const isPrime = (number) => {
  if (number === 1 || number===0){
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

console.log(solution(437674,3))

// 마지막 조건때문에 0으로 스플릿 해도 놓치는 소수는 없다.
