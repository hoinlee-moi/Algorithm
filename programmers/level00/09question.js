// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i++) {
        if(i%2 !=0) {
            answer.push(i)
        }
    }
    return answer;
}

// for문으로 n이하의 정수를 하나하나 꺼내 나눗셈 나머지(%)를 이용 홀짝 구분


//https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
    let answer = 0;
    while(true) {
        if(slice>=n) {
            answer++
            break;
        }
        else if(slice<=n) {
            answer++
            n-= slice
        }
    }
    return answer;
}

//while 반복을 통해 조건을 계속 검사하게 만들어서 해결 했다. 뭔가 하드코딩을 하는 것 같아 다른 대체 방법이 있을 까 해서
//삼항 연산자랑 써봤는데 계속 조건을 검사해야 하기에 일단 while로 돌리는 게 나은 것 같긴 하다.
function solution(slice, n) {
    return Math.ceil(n / slice)
}
//다른 사람의 풀이를 보고 알게됐는데 Math 함수를 쓰면 해결이 됐다! 이건 내가 문법을 몰라서 생긴 문제니 Math 함수를 잘 알아보자