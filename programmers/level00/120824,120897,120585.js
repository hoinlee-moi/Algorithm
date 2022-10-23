// https://school.programmers.co.kr/learn/courses/30/lessons/120824  짝수 홀수 개수

function solution(num_list) {
    let answer = [];
    let oddNumCount = 0
    let evenNumCount = 0
    for(let i = 0; i<num_list.length; i++) {
        if(num_list[i] %2 === 0 ) {
            evenNumCount ++
        } else { oddNumCount++}
    }
    answer.push(evenNumCount,oddNumCount)
    return answer;
}

// 홀짝 변수를 생성후 배열을 for문으로 돌려 하나씩 홀짝을 비교


// https://school.programmers.co.kr/learn/courses/30/lessons/120897  약수 구하기

function solution(n) {
    let answer = [];
    for(let i=1; i <= n; i++) {
        if(n%i === 0) {
            answer.push(i)
        }
    }
    return answer;
}

// 오름차순이라 그냥 for문을 썼고 나머지가 0인값이 약수이니 %사용


//https://school.programmers.co.kr/learn/courses/30/lessons/120585  머쓱이보다 키 큰 사람

function solution(array, height) {
    let answer = 0;
    for(let i=0; i<array.length; i++) {
        if(array[i] > height) {
            answer++
        }
    }
    return answer;
}