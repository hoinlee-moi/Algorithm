function solution(balls, share) {
    if(balls===share) return 1
    let ballFactorial = factorial(balls)
    let shareFactorial = factorial(balls-share)*factorial(share)
    let answer =  ballFactorial/ shareFactorial
    return Number(answer);
}

const factorial = num => {
    let answer = BigInt(1)
    for(let i=1; i<=num; i++) answer*=BigInt(i)
    return answer
}

/*
먼저 팩토리얼을 반환하는 함수를 만든 후 범위가 벗어남에 따라 BigInt를 써서 범위를 맞췄다. 이게 범위 문제로 계속 한문제가 틀렸었는데 BigInt로 해결하는 방법을 보고 되게 신기했다.
아무튼 그 이후 경우의 수를 구하는 식을 이용하여 정답을 도출함
다른사람 풀이!
function solution(balls, share) {
    var result = 1;
    while(share > 0){
        result = result * balls / share;
        balls = balls - 1;
        share = share - 1;
    }
    return Math.round(result);
}
*/