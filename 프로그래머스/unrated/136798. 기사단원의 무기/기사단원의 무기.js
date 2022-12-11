function solution(number, limit, power) {
    let weapon = [];
    for(let i=1; i<=number; i++){
        weapon.push(measure(i))
    }
    return weapon.reduce((acc,cur)=>{
        if(cur>limit) return acc+power
        return acc+cur
    })
}

const measure = num => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    return divisors.length;
}

/*
여러가지 풀이를 해보고 비교를 했지만 가장 빠른 결과 값이 나온 건 이 코드였다.
- 먼저 `measure`란 약수를 구하는 함수를 따로 지정한다.
- 제곱근을 이용하여 약수 구하는 시간을 줄였으며 중복된 값이 들어가는 경우가 있어 `Set`을 써봤지만 시간적 소요가 확 늘어났다.
- `if`문으로 중복을 없에고 약수 개수를 `return`한다.
- 본문에서 `for`문과 만들어둔 `measure`함수를 이용해 약수의 개수를 `weapon`이란 배열에 담는다
- `weapon`들의 총 합이 곧 철근의 무게이니 `reduce`를 이용해 모두 더하지만 이때 현재 계산되는 값 `cur`이 `limit`를 넘어가면 `power`를 더하고 아니면 그냥 더한다
*/
