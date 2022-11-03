// https://school.programmers.co.kr/learn/courses/30/lessons/120864  숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
    const arr = my_string.split(/[a-z]|[A-Z]/g).filter(v=>v!="")
    const answer = arr.reduce((acc,v)=> Number(acc)+Number(v),0)
    return answer;
}
// filter를 안쓸 경우
function solution(my_string) {
    const answer = my_string.split(/[a-z]|[A-Z]/g).reduce((acc,v)=> Number(acc)+Number(v),0)
    return answer;
}
/*
먼저 split을 이용하여 영어 소문자와 대문자를 전부 제거하며 배열로 되는데 filter를 통해 빈값은 제거를 해준다. 
그냥 바로 reduce를 사용해도 괜찮지만 혹시 있을 상황을 대비하여 넣었다. 넣게 되면 어레이 시간이 늘어나서 안좋은면도 있긴 하다.
아무튼 그뒤 남은 저장된 배열들을 더하여 합을 도출
\d+ 정규식 표현중 하나이상 연결된 숫자 를 통해서도 해결 할 수 있었다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120840  구슬을 나누는 경우의 수

function solution(balls, share) {
    if(balls===share) return 1
    let ballFactorial = factorial(balls)
    let shareFactorial = factorial(balls-share)*factorial(share)
    let answer =  ballFactorial/ shareFactorial
    return Number(answer);
}

const factorial = num => {
    let answer = BigInt(1)
    for(let i=1; i<=num; i++) answer*=BigInt(i)
    return answer
}

/*
먼저 팩토리얼을 반환하는 함수를 만든 후 범위가 벗어남에 따라 BigInt를 써서 범위를 맞췄다. 이게 범위 문제로 계속 한문제가 틀렸었는데 BigInt로 해결하는 방법을 보고 되게 신기했다.
아무튼 그 이후 경우의 수를 구하는 식을 이용하여 정답을 도출함
*/

//다른 사람 풀이 

function solution(balls, share) {
    var result = 1;
    while(share > 0){
        result = result * balls / share;
        balls = balls - 1;
        share = share - 1;
    }
    return Math.round(result);
}

/*

*/

function solution(balls, share) {
    return (
      Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
      Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
    );
  }



  sdfsefsef