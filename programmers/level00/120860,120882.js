// https://school.programmers.co.kr/learn/courses/30/lessons/120860  직사각형 넓이 구하기
 
function solution(dots) {
    const xArr =dots.map(v=> v[0])
    const yArr =dots.map(v=> v[1])
    const width = Math.max(...xArr) - Math.min(...xArr)
    const height = Math.max(...yArr) - Math.min(...yArr)
    return width*height
}

/*
주어진 배열중 x와 y좌표들만 따로 꺼낸뒤 큰 값과 작은 값을 빼 길이를 구했다. 이후 곱으로 값 도출
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120882  등수 매기기


function solution(score) {
    const answer = score.map(v=>v[0]+v[1]);
    const answerSort = [...answer]
    answerSort.sort((a,b)=>b-a)
    const order = answer.map(v=>answerSort.indexOf(v)+1)
    return order
}

/*
너무 깔끔하게 풀려서 매우 좋다! 먼저 들어온 배열의 등수를 하기위해 그냥 두 점수의 합을 구한 배열을 하나 만들었고
그 합들의 내림차순 배열을 하나 만들어 각 점수들이 몇등에 위치하는지 체크했다. 이때 조건상 2등이 2명이면 3등은 없고 4등이 나오도록 했는데
이는 indexOf의 특징을 이용하여 찾는 요소의 첫번째 자리만을 찾아주도록 하여 해결
*/