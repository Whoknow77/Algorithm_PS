// function solution(line){
//   const arr = line.split('\n').map(Number)
//   const [c,p,...nArr]=arr
//   let cards = Array.from({length:c},(_,idx)=>idx+1)

//   let shuffleCount=0
//   while(true){
//     if(shuffleCount>=p){
//       break
//     }
//     else{
//       shuffle(cards,false,[])
//     }
//   }

//   console.log(cards.slice(0,5).join(' '))
  
//   function shuffle(curUpperCards,flag,rest){
//     const n = nArr[shuffleCount]
//     const ups=flag ? curUpperCards.slice(0,n): cards.slice(0,n)
//     const downs=flag ? curUpperCards.slice(-n): cards.slice(-n)
//     const middles=flag ? curUpperCards.slice(n,-n): cards.slice(n,-n)
//     const upperCards = [...middles, ...ups,...downs]
//     cards=[...upperCards,...rest]
    
//     if(middles.length>2*n){
//       // 올라온 카드만 셔플
//       shuffle(middles,true,[...ups,...downs])
//     }
//     else{
//       shuffleCount+=1
//     }
//     }
// }

// solution('10\n2\n2')


// // c p n n

const readline = require("readline")
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const input=[]

rl.on("line",(line)=>{
  input.push(line)
}).on("close",()=>{
  console.log(input)
  process.exit()
})
