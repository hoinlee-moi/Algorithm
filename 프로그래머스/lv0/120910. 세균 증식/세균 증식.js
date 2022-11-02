function solution(n, t) {
    let answer = n
    let repeat = 0
    while(true) {
        answer *= 2
        repeat++
        if(repeat ===t) {
            break;
        }
    }
    return answer;
}