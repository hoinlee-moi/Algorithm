function solution(s) {
    let zeroCount = 0
    let cycle = 0
    while(s!="1"){
        let arr = s.split("")
        let asArr = arr.filter(v=>v==="1")
        zeroCount += s.length-asArr.length
        s = asArr.length.toString(2)
        cycle++
    }
    return [cycle,zeroCount];
}