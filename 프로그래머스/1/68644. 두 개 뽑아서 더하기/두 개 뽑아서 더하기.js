function solution(numbers) {
    const answer = [];
    for(let i=0; i<=numbers.length-1; i+=1){
        for(let j=i+1; j<=numbers.length-1; j+=1){
            answer.push(numbers[i]+numbers[j])
        }
    }
    return [... new Set(answer)].sort((a,b)=>a-b);
}

/*
이중 for문을 써서 내부 for, j의 시작지점엔 i값을 넣어도 같게 실행이 똑같이 될 것이다.
또 if문으로 굳이 거르지 않고 for문이 끝난 뒤 Set으로 중복제거를 해도 된다.
위 2가지 방법을 써보려다 안 써본 방법으로도 풀어보고 싶어 새롭게 shift와 반복문을 써봤는데 나름 잘 풀린 것 같다.
먼저 while문 조건에 numbers란 배열이 있는 동안 계속 돌도록 제한을 걸었는데 이유는 값을 shift로 꺼내서 배열을 줄여 나갈 것이기 때문이다.
이후 줄인 배열을 반복하고 Set을 쓰지 않기 위해 if문에 includes 조건을 걸어 제한을 줬다.
마지막으로 sort로 오름차순을 만든 후 반환
*/