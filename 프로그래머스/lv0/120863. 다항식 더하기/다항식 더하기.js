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

