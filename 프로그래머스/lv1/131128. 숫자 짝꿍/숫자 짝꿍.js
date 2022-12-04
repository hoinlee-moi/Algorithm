const solution = (X, Y) =>{
    let answer=""
    X = X.split("")
    Y = Y.split("")
    for(let i = 0 ; i < 10 ; i ++) {
        const sameX = X.filter(a => Number(a) === i).length
        const sameY = Y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(sameX, sameY))
    }
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}