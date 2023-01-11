// 다른 사람 풀이

function solution(numbers, k) {
    let index = 0;
    
    for(let i = 0; i < k; i++){
        index += 2;    
        
        if(index > numbers.length){
            index -= numbers.length;
            console.log(index);
        }
    }
    return numbers[index-2];
}


function solution2(numbers, k){

    return numbers[((2 * (k -1))) % numbers.length];
}



// 0 2 4 0 2 4

// 0 2 4 1 3 0

// 1 2 3 4 5 6 짝수일 경우 1, 3, 5 반복(짝수 인덱스만 넣기)
// 인덱스 0 2 4 6 8 10 ==> parseInt(인덱스 % number.length); 
// 인덱스 0 2 0 2 0 2
//       1 3 5 1 3 5

// 1 3 2 1 3 2 

// 0 2 1 0 2 1

// 0 2 4 6 8 10

// 1 2 3

// 1 2 3 4 5 홀수일 경우 1, 3, 5, 2, 4, 1, 3, 5, 2, 4 반복( 짝수인덱스 다넣고 홀수 인덱스넣기)