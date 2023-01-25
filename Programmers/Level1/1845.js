function solution(nums) {
    const max = nums.length / 2;
    const size =new Set([...nums]).size;
    return size > max ? max : size;
}