function solution(array) {
    array.sort((a,b) => a-b);
    return Math.ceil((array[parseInt(array.length/2)]));
    // return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

