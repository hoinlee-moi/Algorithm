function solution(s) {
    const upper = s.replace(/[a-z]/g,"").split("").sort().reverse().join("")
    const lower = s.replace(/[A-Z]/g,"").split("").sort().reverse().join("")
    return lower+upper
}