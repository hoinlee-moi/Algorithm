function solution(s) {
    let answer = 0;
    let standard = s[0]
    let count = [1,0];
    for(let i=1;i<=s.length-1;i++){
        if(s[i]===standard) count[0]++
        else count[1]++
        if(count[0]===count[1]){
            answer++
            standard = s[i+1]
            count = [0,0]
        }
        
    }
    if(count[0]!==0||count[1]!==0) answer++
    return answer;
}
/*
단순히 반복문과 조건들을 이용하여 풀었습니다.
속도면에선 빠르지만 코드의 확장성은 부족한 듯 합니다
- 정답을 카운트 할 `answer`변수를 만듭니다
- 기준이 될 문자를 정할 `standard`변수를 만들고 맨 첫 문자를 할당합니다
- 비교할 것이 딱 2개이기 때문에 `count`란 배열에 2가지 요소만 두고 `standard`에 미리 첫 문자를 할당하였으니 `0`번째 요소를 기준 문자라 보고 1을 할당합니다.
- `for`를 이용해 반복문을 돕니다 (`0`번째는 할당하였으니 `1`번부터 돈다)
- 이때 주어진 문자가 기준 문자열과 같으면 `count`에서 `0`번째 요소의 횟수를 1증가시키고 다르다면 `1`번째 요소를 증가시킵니다
- 따라서 `count`에서의 `0`번째와 `1`번째의 값이 같으면 동일한 값이 되니 정답 카운트 `answer`를 증가시키고 기준 문자열을 다음 문자열로 할당 `count`를 다시 `[0,0]`으로 초기화 시킵니다.
- 이를 반복하여 문자열 끝까지 계산하고 마지막에 남은 문자열들을 검사하기 위해 `[0,0]`이 아닌 조건문을 걸어 정답 `answer`에 증감을 합니다

아래는 재귀 함수를 이용한 다른 사람의 풀이인데 참고해봐도 좋을 것 같다.

function solution(s, count=0) {
    if(!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i=0
    for(; i<rest.length; i++){
        if(rest[i] === first) countSame++
        else countInSame++
        if(countSame === countInSame) break
    }
    return solution(rest.slice(i+1).join(""), count+1)
}
*/