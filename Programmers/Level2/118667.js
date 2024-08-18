// class Node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }
// class Queue{
//   constructor(){
//     this.head=null
//     this.rear=null
//     this.length=0
//   }

//   enqueue(data){
//     const node = new Node(data)
//     if(!this.head){
//       this.head=node
//     }
//     else{
//       this.rear.next=node
//     }
//     this.rear=node
//     this.length++
//   }

//   dequeue(){
//     if(!this.head){
//       return false
//     }
//     const data = this.head.data
//     this.head=this.head.next
//     this.length--
//     return data
//   }
// }

// function solution(queue1, queue2) {

//   let oneSum = queue1.reduce((prev,cur)=>{
//       return prev+cur
//   },0)
//   let twoSum = queue2.reduce((prev,cur)=>{
//       return prev+cur
//   },0)


//   const firstQueue = new Queue()
//   queue1.forEach((item)=>{
//     firstQueue.enqueue(item)
//   })
//   const secondQueue = new Queue()
//   queue2.forEach((item)=>{
//     secondQueue.enqueue(item)
//   })
  
//   const halfSum = (oneSum+twoSum)/2 
  
//   let count=0
//   while((oneSum!==0 && twoSum!==0) && count<=600000){
//       if(oneSum === twoSum){
//           return count
//       }
//       if(oneSum>halfSum){
//       const removeValue =firstQueue.dequeue()
//       secondQueue.enqueue(removeValue)
//        oneSum-=removeValue
//        twoSum+=removeValue
//       }
//       else if(twoSum>halfSum){
//         const removeValue =secondQueue.dequeue()
//         firstQueue.enqueue(removeValue)
//         oneSum+=removeValue
//         twoSum-=removeValue
//       }
//       count+=1
//   }
  
//   return -1
  
// }





// 다른 풀이(실제로 배열에서 빼지 않고 인덱스로 계산)

function solution(queue1, queue2) {
  let answer = 0;
  let queueSum1 = 0;
  let queueSum2 = 0;
  queue1.forEach(element=>queueSum1+=element);
  queue2.forEach(element=>queueSum2+=element);
  const totalLen = queue1.length+ queue2.length;
  let queue1Index = 0;
  let queue2Index = 0;
  
  
  while(queueSum1 !== queueSum2){
      if(queueSum1>queueSum2){
          queueSum1 -= queue1[queue1Index];
          queue2.push(queue1[queue1Index]);
          queueSum2 +=queue1[queue1Index++];
      }
      else{
           queueSum1 += queue2[queue2Index];
           queue1.push(queue2[queue2Index]);
           queueSum2 -=queue2[queue2Index++];
      }
       answer++;
      if(queue1Index+queue2Index>=totalLen){
          return -1;
      }
  }
  return answer;
}

console.log(solution([1,2,4],[3,2,4]))

// 124
// 324


