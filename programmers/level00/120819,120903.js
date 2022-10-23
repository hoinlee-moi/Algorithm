//https://school.programmers.co.kr/learn/courses/30/lessons/120819  아이스아메리카노

function solution(money) {
    let answer = [];
    let americano = parseInt(money/5500)
    let change = parseInt(money % 5500)
    answer.push(americano,change)
    return answer;
}
// money가 정수로 주어지기에 parseInt를 쓸 필요는 없지만 혹시 하는 변수를 제외하기 위해 넣음


//https://school.programmers.co.kr/learn/courses/30/lessons/120903  배열의 유사도

function solution(s1, s2) {
    let answer = 0;
    for(let i=0; i<s1.length; i++) {
        for(let j=0; j<s2.length; j++) {
            if(s1[i] === s2[j]) {
                answer++
            }
        }
    }
    return answer;
}


function solution(s1, s2) {
    let answer = s1.filter(x => s2.includes(x)).length
    return answer
}

//비교를 위해 for문 중첩을 사용할 수도 있고 간단하게 array 함수를 이용(filter)할 수 있다.