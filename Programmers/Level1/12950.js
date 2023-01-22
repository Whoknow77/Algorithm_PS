// 1차원 배열 생성후 배열 넣기 => 2차원

function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++){ 
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){ 
            sum.push(arr1[i][j] + arr2[i][j]) 
        }
        answer.push(sum) 
    }
    return answer;
}

// 이차원 배열 생성
function solution2(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}