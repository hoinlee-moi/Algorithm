function solution(arr) {
    return arr.reduce((acc,cur)=>{
        return lcm(acc,cur)
    });
}

const lcm = (num1,num2) => {
    let gcd = 0
    for(let i=Math.max(num1,num2);i>0;i--){
        if(num1%i===0 && num2%i===0){
            gcd = i
            break;
        }
    }
    return (num1*num2)/gcd
}

/*
- 아래에 먼저 최소공배수를 구하는 함수를 만든다.
- 최대 공약수를 먼저 구하는 수학식을 이용하는데 두 수의 곱은 최대 공약수 *최소 공배수 이기 때문에 이 식을 이용한다.
- 최대 공약수를 구하는데 제일 큰값부터 내려오는 감소 연산자를 사용하여 최대 공약수를 구하고 이후 식을 이용해 최소 공배수를 `return`하게 한다.
- 본문의 배열로 돌아가서 `reduce`를 사용하여 `acc`,`cur` 두 수를 이용한 최소 공배수를 구하고 그 다음 수와의 최소공배수를 구하는 식으로 나아가 배열들의 최소공배수를 구한다. 
*/