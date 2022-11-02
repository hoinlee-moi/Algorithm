function solution(denum1, num1, denum2, num2) {
    let answer = []
    const numerator = (denum1*num2)+(denum2*num1)
    const denominator = num1*num2
    const maxMeasure = measure(numerator,denominator);
    answer.push(numerator/maxMeasure)
    answer.push(denominator/maxMeasure)
    return answer
}



const measure = (num1,num2) => {
    let measure = []
    const maxNum = Math.max(num1,num2)
    for(let i=1; i<=maxNum; i++) {
        if(num1%i===0 && num2%i===0) measure.push(i)
    }
    return Math.max(...measure)
}

/*
먼저 최대공약수를 구해주는 함수를 따로 만든다. 분자와 분모를 받아 큰 수를 기점으로 for문을 돌려 공약수들을 찾아낸 뒤
그 중 최대 공약수를 return해준다. 
이후 최대공약수를 이용하여 기약분수로 만든 값을 차례대로 넣어준다.
*/

function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}
/*
최대공약수 만드는 함수를 좀 더 쉽게 처리하신 분이 있는데 다음번에 이용할 때가 오면 사용해보자
*/
