// function solution(info, query) {
//   const arr=info.map((item)=> item.split(' '))

//   const Search=(st,idx,arr)=>{
//     if(idx===4){
//       return arr.filter((v)=>Number(v[idx])>=Number(st))
//     }
//     else{
//       return arr.filter((v)=>v[idx]===st)
//     }
//   }
  
//   const realAnswer=[]


//   query.forEach((item)=>{
//     const[lang,stack,brief,foodScore]=item.split('and').map((item)=>item.trim())
//     const [food,score]=foodScore.split(" ")
//     let answer=[...arr]

//     if(lang!=="-"){
//       answer= Search(lang,0,[...answer])
//     }

//     if(stack!=="-"){
//       answer= Search(stack,1,[...answer])
//     }

//     if(brief!=="-"){
//       answer= Search(brief,2,[...answer])
//     }

//     if(food!=="-"){
//       answer= Search(food,3,[...answer])
//     }

//     if(score!=="-"){
//       answer= Search(score,4,[...answer])
//     }

//     realAnswer.push(answer.length)
//   })

//   return realAnswer
// }

// 효율성 0점 -> 완탐하면 안됨, 가지를 치거나 다른 자료구조 사용(map)

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  return mid + 1; 
}

const getInfos = (info) => {
  const infos = {}; 
  info.forEach(infoString => { 
    const arr = infoString.split(" "); 
    const score = parseInt(arr.pop()); 
    const key = arr.join(""); // key를 javabackendjuniorpizza와 같은 형태로 해줄 거에요.
    if (infos[key]) infos[key].push(score)
    else infos[key] = [score]; // [150]의 형태로 배열에 점수를 넣어줘요.
  });
  for (const key in infos) {
    infos[key].sort((a, b) => a - b); 
  }
  return infos;
}

const getResult = (infos, query, score) => {
  const infosKey = Object.keys(infos);
  return infosKey
    .filter(key => query.every(v => key.includes(v)))
    .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
}

const solution = (info, query) => {
  let answer = [];
  const infos = getInfos(info);
  query
    .map(q => q
       .split(/ and | |-/i) 
       .filter(v => v !== "") 
    ) 
    .forEach(query => {
      const score = query.pop();
      const result = getResult(infos, query, score);
      answer.push(result)
    })
  return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))


