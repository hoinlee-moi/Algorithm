function solution(s) {
    let zeroCount = 0
    let cycle = 0
    while(s!="1"){
        let arr = s.split("")
        let asArr = arr.filter(v=>v==="1")
        zeroCount += s.length-asArr.length
        s = asArr.length.toString(2)
        cycle++
    }
    return [cycle,zeroCount];
}

/*
- 먼저 싸이클과 제거한 0의 개수를 체크할 변수를 만든다.
- `while`문을 통해 결과가 마무리 될때까지 반복문을 돌린다.
- 배열을 이용해 풀었고 0을 제거한 값은 원래 `s`의 길이에서 `filter`를 통해 1만 추려낸 배열의 길이를 뺀 값과 같기 때문에 그 값을 더해준다.
- 다시 `s`는 1만 추려낸 배열의 길이를 `toString`을 통해 2진법으로 변환 시켜 할당하고
- 싸이클을 추가

아래는 배열화를 시키지 않고 `match`를 이용해 푼 코드이다. 성능적으론 while문이 메모리는 1MB 더 낮게 쓰고, 시간은 5.18ms 더 빨랐다.

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

*/