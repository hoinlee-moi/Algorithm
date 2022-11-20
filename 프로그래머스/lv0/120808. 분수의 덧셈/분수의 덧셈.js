function solution(denum1, num1, denum2, num2) {
    let answer = []
    const numerator = (denum1*num2)+(denum2*num1)
    const denominator = num1*num2
    const maxMeasure = measure(numerator,denominator);
    answer.push(numerator/maxMeasure)
    answer.push(denominator/maxMeasure)
    console.log(8%10)
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