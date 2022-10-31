function solution(numbers) {
    numbers.sort((a,b) =>  b - a);
    var answer = numbers[0]*numbers[1]
    return answer;
}