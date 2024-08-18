class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}
class Queue{
  constructor(){
    this.head=null
    this.rear=null
    this.length=0
  }

  enqueue(data){
    const node = new Node(data)
    if(!this.head){
      this.head=node
    }
    else{
      this.rear.next=node
    }
    this.rear=node
    this.length++
  }

  dequeue(){
    if(!this.head){
      return false
    }
    const data = this.head.data
    this.head=this.head.next
    this.length--
    return data
  }
}

function solution(queue1, queue2) {

  let oneSum = queue1.reduce((prev,cur)=>{
      return prev+cur
  },0)
  let twoSum = queue2.reduce((prev,cur)=>{
      return prev+cur
  },0)


  const firstQueue = new Queue()
  queue1.forEach((item)=>{
    firstQueue.enqueue(item)
  })
  const secondQueue = new Queue()
  queue2.forEach((item)=>{
    secondQueue.enqueue(item)
  })
  
  const halfSum = (oneSum+twoSum)/2 
  
  let count=0
  while((oneSum!==0 && twoSum!==0) && count<=600000){
      if(oneSum === twoSum){
          return count
      }
      if(oneSum>halfSum){
      const removeValue =firstQueue.dequeue()
      secondQueue.enqueue(removeValue)
       oneSum-=removeValue
       twoSum+=removeValue
      }
      else if(twoSum>halfSum){
        const removeValue =secondQueue.dequeue()
        firstQueue.enqueue(removeValue)
        oneSum+=removeValue
        twoSum-=removeValue
      }
      count+=1
  }
  
  return -1
  
}

console.log(solution([1,2,4],[3,2,4]))

// 맨 앞의걸 맨 뒤에 붙임

// dfs로 반복해서 매번 양쪽의 합이 같은지 검사해서 같으면 멈추고 카운트 반환

// 다 돌았는데 합이 다르면 -1 반환

// 둘의 합이 같기전까지 한쪽은 무조건 반값보다크고 한쪽은 반값보다 작다

// 반값보다 큰곳을 기준으로 계속 상대꺼에 붙인다.

// shift땜에 시간복잡도 O(n)오류나는듯 -> O(1)로 바꾸기 위해서 Qeuue또는 dequeue 직접 구현해야함(연결 리스트)

// 서로 스왑하면서 무한반복하는 문제

// 최악의 경우 300000 * n


