// https://school.programmers.co.kr/learn/courses/30/lessons/120898  편지

function solution(message) {
    let answer = message.length*2;
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120821  배열 뒤집기

function solution(num_list) {
    let answer = num_list.reverse()
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120830  양꼬치

function solution(n, k) {
    let freeDrink = k-parseInt(n/10)
    let answer = (12000*n)+(2000*freeDrink)
    return answer;
}

//마지막 이 문제에서 살짝 버벅였는데 문제를 제대로 읽지 못해서 틀렸던 거였다. 문제를 잘 읽어보고 빠진 게 없는지 확인하자
// 또 /를 이용할 땐 항상 실수값이 나올 수 있는 걸 인지하자!