function solution(n, k) {
    let freeDrink = k-parseInt(n/10)
    let answer = (12000*n)+(2000*freeDrink)
    return answer;
}