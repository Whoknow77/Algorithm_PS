// ABC 각각 answers의 길이보다 클 때 repeat하고 slice 해서 개수를 맞춰줌
function solution(answers) {

    let A = [1,2,3,4,5];
    let B = [2,1,2,3,2,4,2,5];
    let C = [3,3,1,1,2,2,4,4,5,5];

    A = ([A] +"").repeat(Math.ceil(answers.length/A.length)).split(',').join('').split('').map(item=>+item).slice(0,answers.length);
    B = ([B] +"").repeat(Math.ceil(answers.length/B.length)).split(',').join('').split('').map(item=>+item).slice(0,answers.length);
    C = ([C] +"").repeat(Math.ceil(answers.length/C.length)).split(',').join('').split('').map(item=>+item).slice(0,answers.length);
    let AllArray=[A,B,C];

    for(let i=0; i<AllArray.length; i++){
        AllArray[i]=AllArray[i].filter((item,index) => item===answers[index]).length;
    }
    let max = Math.max.apply(null, AllArray);

    return AllArray.map((num,index) =>{
        if(num===max){
            return index+1;
        }
    }).filter(a=>+a); 
}

// 나머지을 이용해 인덱스 반복
function solution2(answers) {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    let a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    let a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    let max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

// 똑같이 나머지를 이용했지만 filter가 아닌 for문으로 더 빠름
function solution3(answers) {
    let answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
}
