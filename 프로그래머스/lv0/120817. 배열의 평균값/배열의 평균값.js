function solution(numbers) {
    const sum = numbers.reduce((acc,value) => acc+value )
    const answer = sum/numbers.length
    return answer;
}