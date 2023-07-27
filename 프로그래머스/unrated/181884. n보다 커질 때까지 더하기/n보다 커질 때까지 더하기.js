function solution(numbers, n) {
    let answer = 0
    for(let i=0; i<=numbers.length-1;i++) {
        answer += numbers[i]
        if(answer>n) {
            return answer
        }
    }
}