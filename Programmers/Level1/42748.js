// slice로 자르고 정렬 후 출력
function solution(array, commands) {
    return commands.map(item=> array.slice(item[0]-1,item[1]).sort((a,b) => a-b)[item[2]-1]);
}


// 다른 사람 풀이

// 구조 분해 할당
function solution2(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

// slice로 자르고 정렬 후 slice로 하나 잘라서 출력
function solution3(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}