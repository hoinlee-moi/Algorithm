function solution(spell, dic) {
    let answer = 0
    a :for(let i = 0; i<dic.length; i++){
        for(let j = 0; j<spell.length; j++){
            if(!dic[i].includes(spell[j])) {
                answer = 2
                continue a;
            }
            else answer = 1
        }
        if(answer===1) return 1
    }
    return answer;
}



/*
먼저 참 거짓을 판별한 변수를 하나 두고 반복문 중첩을 통해 2 배열을 비교했다 그리고 빨리 종료 되기 위해 continue 레이블을 이용해 이동시켜 해결
*/

function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}

/*
배열 함수를 쓴 값인데 위에 every라는 함수도 있는지 처음 알았다. 먼저 dic에 있는 배열을 filter를 통해 하나씩 비교하도록 꺼내며
비교할 때 spell에 every 함수를 이용해 주어진 dic의 요소 안에 spell의 요소가 있는지 확인
every 함수는 모든 요소가 주어진 함수를 통과하는지 판별하고 통과 한다면 트루를 배출하니 spell의 모든 요소가 주어진 dic요소에 포함한다면 
트루를 반환하여 filter함수에 들어가게 된다.
없을 경우 0이 반한돼서 삼항 연산자로 2가 출력 있으면 1이 출력 되도록 함
*/
