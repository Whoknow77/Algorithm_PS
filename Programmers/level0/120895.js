function solution(my_string, num1, num2) {
    let temp=my_string[num1];
    my_string=my_string.replaceAt(num1,my_string[num2]);
    my_string=my_string.replaceAt(num2,temp);
    return my_string;
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

// 다른 사람 풀이

function solution2(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

function solution3(my_string, num1, num2){
    const arr = my_string.split('');
    const temp = arr[num1];
    arr[num1]=arr[num2];
    arr[num2]=temp;
    return arr.join('');

}