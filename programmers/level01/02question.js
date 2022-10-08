// https://school.programmers.co.kr/learn/courses/30/lessons/120824

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