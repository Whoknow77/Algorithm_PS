function solution(order) {
    return order.toString().split('').map(v=>+v).filter(item=>item%3===0 && item!==0).length;
}



function solution2(order) {
    return (''+order).split(/[369]/);
}


