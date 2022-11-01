function solution(polynomial) {
    let x ='';
    const polynomialArray = polynomial.replace(/[' ']/g,'').split('+');
    const xNumber = polynomialArray.filter(v=> v.includes('x')).map(v=> {
        if(v.length===1) return 1
        else return Number(v.replace('x',''))
    })
    const xSum = xNumber.reduce((acc,cur)=>acc+cur,0)
    const constNumber = polynomialArray.filter(v=> !v.includes('x'))
    const constSum = constNumber.reduce((acc,cur) => Number(acc)+Number(cur),0)
    if(xSum === 1) x = 'x'
    else x = `${xSum}x`
    if(xSum === 0 && constSum === 0) return 0
    return constSum===0? `${x}`: xSum===0?`${constSum}`:`${x} + ${constSum}`
}

/*
먼저 주어진 배열에서 띄어쓰기를 전부 삭제한 후 +로 분리 시켜 각 항을 도출시킨다.
이후 filter를 사용하여 x항의 배열과 상수항의 배열을 분리
이후 reduce를 사용하여 각 항의 합들을 나오게 하는데 x항의 경우 x라는 문자가 있기때문에 mpa을 사용하여 계수만을 골라내는 작업을 진행한다.
계수가 1이면 x만 있기 때문에 따로 if문을 적용시키고 replace를 통해 x를 제거 이후 reduce로 합을 도출한다.
이 과정에서 출력값의 조건들이 있기 때문에 x의 계수가 1일경우 x를 내보내기 위해 따로 x라는 변수를 만들어 집어 넣었다.
1일경우 그냥 x를 아닐경우 합의 x를 넣도록 만든 후 
각 항의 값이 각각 0이거나 둘 다 0이거나등을 조건식을 만들어 return하도록 한다.
*/
