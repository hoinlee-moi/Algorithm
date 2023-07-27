function solution(number, n, m) {
    return number%n!==0?0:number%m!==0?0:1;
}