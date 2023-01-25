function solution(numbers) {
    const sum=[];
    for(let i=0; i< numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i!==j){
                sum.push(numbers[i]+numbers[j]);
            }
        }
    }

    return Array.from(new Set([...sum])).sort((a,b) => a-b);
}
