function solution(food) {
    let answer = '';
    let between = 0
    for(let i=1;i<=food.length-1;i++) {
        if(food[i]<=1)continue;
        if(food[i]>1){
            let count = 0;
            food[i]%2===0? count=food[i] : count=food[i]-1;
            if(i===1) answer+= "1".repeat(count)
            else {
                let str = String(i).repeat(count)
                answer = answer.slice(0,between)+str+answer.slice(between,answer.length)
            }
            between += count/2
        }
    }
    answer = answer.slice(0,answer.length/2)+"0"+answer.slice(answer.length/2,answer.length)
    return answer;
}

/*
풀이를 적으며 어떻게 하면 반복문을 최대한 줄일 수 있을까를 고민하다보니 slice를 사용하게 됐는데 각 문단마다 들어가는 작은 문법들도 문법에 따라 시간 소요가 있다는 걸 간과 한 것 같다.
먼저 문자열 빈칸`answer`를 두고 사이에 들어갈 인덱스를 알려줄 변수 `between`을 만든다
이후 `food`를 반복 시켜 각 순번의 음식 개수가 몇개인지 파악한다.
이때 음식 개수는 양쪽으로 정확하게 배분 시켜야 하기 때문에 짝수여야만 하고 홀수이면 -1을 시켜 짝수로 계산한다.
음식 개수를 짝수개만큼 `repeat`이란 함수를 써 만들고 1번째 음식은 그냥 `repeat`값을 넣으면 되지만 2번째부턴 사이에 들어가기 위해
`slice`를 이용해 `between`값 즉 넣은 값의 절반의 위치에 붙일 수 있도록 한다.이는 항상 붙이는 값의 절반을 더해주면 계속해서 중간의로 가기 때문에 `count`를 +해주는 것
마지막으로 다시 중간의 위치에 물`0`을 slice로 넣어주고 마무리

이는 반복문을 줄이기 위해 하나의 반복문 안에서 모든걸 해결하려고 했는데 그러다 보니 깔끔한 코드가 되지 못했고 반복 한번당 거쳐야 할 조건과 문법들이 많다보니 오히려 시간 소모가 더 생겨버렸다.

function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}

너무 시운 방법이 있었는데 `res`를 하나 만들고 각 `food`개수의 절반만큼만 더한다
이 때 나처럼 if문을 이용해 짝수를 구별하는 것이 아닌 `Math.floor`를 이용해 소수점을 버림으로서 2로 나눈 값이 언제나 반쪽을 가지게 된다.
그래서 반쪽을 for문을 통해 붙이고 ` +"0"+ `를 통해 0을 붙인 후 `res`를 배열로 만들어 `reverse` 시켜 반대쪽을 만든 후 `join`으로 문자열로 만든 걸 붙인다.
*/
