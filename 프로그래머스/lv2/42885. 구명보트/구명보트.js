function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>b-a)
    for(let i=0; i<=people.length-1;i++){
        if(people[i]+people[people.length-1]<=limit){
            people.pop()
        }
        answer++
    }
    return answer;
}

/*
- 탐욕법을 쓰기 때문에 `limit`에 가장 가까운 큰 값을 먼저 뺀뒤 남은 숫자가 가장 작은 값에 들어갈 수 있는지를 체크한다
- 그래서 `sort`로 먼저 내림차순을 한 뒤 반복문을 돌아 가장 큰값 (`i`번째)와 배열의 마지막값을 합해 `limit`에 걸리는지 체크하고 문제 없다면 `pop()`을 이용해 맨 마지막 값을 빼준다
- 이는 반복문을 통해 큰 숫자는 차례대로 가지만 맨 마지막에 있는 가장 작은 값은 그대로 남아있어 반복을 돌다 한번 더 체크 될 수 있기 때문에 `pop()`을 통해 아예 제거 한다.
- 그러면 자연스레 총 길이도 줄어들고 구명보트 개수의 최솟값이 도출된다.
*/