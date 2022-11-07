function solution(numbers) {
    numbers.sort((a,b) => b-a)
    let answer = numbers.map((v,index) => v*numbers[index+1])
    answer.sort((a,b) => b-a)
    return answer[0]
}