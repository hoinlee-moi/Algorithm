function solution(hp) {
    console.log(parseInt(hp/5)+'-'+parseInt((hp%5)/3)+'-'+parseInt((hp%5)%3))
    return parseInt(hp/5) + parseInt((hp%5)/3) + parseInt((hp%5)%3)
}