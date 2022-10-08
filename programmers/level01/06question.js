//https://school.programmers.co.kr/learn/courses/30/lessons/120903

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