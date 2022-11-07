function solution(n) {
    const sqrt = Math.sqrt(n)
    return sqrt**2===n && Number.isInteger(sqrt)?(sqrt+1)**2 : -1;
}