// 다른 사람 풀이

function solution(numbers, k) {
    let index = 0;
    
    for(let i = 0; i < k; i++){
        index += 2;    
        
        if(index > numbers.length){
            index -= numbers.length;
        }
    }
    return numbers[index-2];
}


function solution2(numbers, k){

    return numbers[((2 * (k -1))) % numbers.length];
}


