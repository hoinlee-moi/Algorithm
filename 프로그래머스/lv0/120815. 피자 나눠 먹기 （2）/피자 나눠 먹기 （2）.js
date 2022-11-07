function solution(n) {
    let pizza = 6
    while(true){
        if(pizza%n === 0) {
            pizza /= 6
            break;
        }
        else pizza +=6
    }
    return pizza;
}