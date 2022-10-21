// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
    const emergencySort = [...emergency]
    const arr = emergencySort.sort((a,b) => b-a)
    let answer = emergency.map(e=> arr.findIndex(v=>e===v)+1)
    return answer
}

/*
먼저 내림차순 정리를 시작할 때 배열이 뒤바뀌는 걸 방지해 배열 복사를 한 다음. 원래의 emergency배열에서 주어진 요소가
내림차순 한 요소중 몇번째 인지 순번을 구한 뒤 배열은 0부터 시작이니 +1을 하여 순서를 맞추었다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120921#


function solution(A, B) {
    let answer = 0
    let count = 0;
    while(A!=B){
        const arrA = A.split('')
        arrA.unshift(arrA.pop())
        A = arrA.join('')
        count++
        answer = count
        if(count >= A.length+1) {
            answer = -1
            break;
        }
    }
    return answer;
}

/*
처음에 문제를 잘못읽어서 실수했다. 횟수를 return하라고 했지만 성공여부로 1 과 -1을 리턴하는 줄 알고 잘못 입력하여 실패했었다.
먼저 밀기 위해서 unshift를 쓰려고 배열화 시킨 후 while문을 이용해 계속 비교 시켰다.
*/
const solution=(a,b)=>(b+b).indexOf(a)

/*
다른사람의 풀이인데 수학적 사고로 엄청 간단한 식이 되었다. 구하려는 식 b를 연속해서 쓸경우 그 문자열 안에서 한칸씩 밀어 나올 수 있는 모든 경우의 수를 구할 수 있다.
그러니 indexOf로 그 시작점의 위치를 반환하면 몇번 밀었는지 알수 있게 되고 없다면 -1을 반환하는 indexOf 특성으로 구해지지 않는 경우도 해결
*/