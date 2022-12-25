function solution(n) {
    const count = n.toString(2).match(/1/gi).length
    while(true){
        n++
        if(n.toString(2).match(/1/gi).length===count) break;
    }
    return n;
}

/*
정규식을 이용하는 방법도 있었고 비트 연산자를 통해 규칙을 파악하여 하는 방법도 있었지만 일단 한번
`while`을 이용해 풀어보자 생각햇는데 바로 통과가 됐다.

- `toString`을 이용한 진법 변환과 문자열에서 일치 조건을 찾는 `match`함수를 이용 반환값이 `array`이 때문에 `length`로 1의 개수를 체크한다
- `while`문을 통해 반복을 돌며 처음 1의 개수를 체크했던 걸 이용해 가장 작은 수를 찾아낸다.
*/