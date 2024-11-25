// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
  const arr = line.split(' ').map(Number)
  const answer=[]
  const stack=new Map()
  for(let i=0; i<arr.length; i++){
    const item = arr[i]
  if(stack.size<3){
      if(!stack.get(item)){
        stack.set(item,0)
      }
      for(const [key,value] of stack){
        stack.set(key,value+1)
      }
  }
  else{
    if(stack.get(item)){
      // 주머니에 있음 -> 주머니에 새로 담고 카운트 초기화
      stack.set(item,0)
    }
    else{
      // 주머니에 없음 -> 가장 오래전 아이템 버리고 주머니에 넣기
      const sortedStack = [...stack]
      const target=sortedStack.sort((a,b)=>b[1]-a[1])[0][0]
      answer.push(target)
      stack.delete(target)
      stack.set(item,0)
      for(const [key,value] of stack){
        stack.set(key,value+1)
      }
    }
  }
}
		console.log(answer.join(' '))
		rl.close();
	}
	
	process.exit();
})();
// 인덱스마다 시간 카운트
