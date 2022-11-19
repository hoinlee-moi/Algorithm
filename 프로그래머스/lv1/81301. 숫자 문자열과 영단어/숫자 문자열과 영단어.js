function solution(s) {
    if(Number(s)) return Number(s)
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const answer = numArr.map((v,i)=> {
        let regEx = new RegExp(v, "gi")
        s=s.replace(regEx,i)
        return s
    })
    return +answer[9];
}