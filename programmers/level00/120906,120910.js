//https://school.programmers.co.kr/learn/courses/30/lessons/120906  자릿수 더하기

function solution(n) {
    let answer = 0;
    let numString = String(n)
    for(let i=0; i < numString.length; i++) {
        answer += Number(numString[i])
    }
    return answer;
}

// 자릿수를 구하기 위해 문자열 변환 후 for문을 통해 각 자리의 수를 숫자로 다시 변환하여 합산

//https://school.programmers.co.kr/learn/courses/30/lessons/120910  세균 증식

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

// while 반복루프를 이용해 t만큼 반복해서 2배로 늘어나도록 만듬. 순간 result를 보고 제곱근으로 잘못 생각해서 시간을 뺏김! 문제 파악 주의!