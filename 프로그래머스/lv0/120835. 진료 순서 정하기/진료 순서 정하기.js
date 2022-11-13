function solution(emergency) {
    const emergencySort = [...emergency]
    const arr = emergencySort.sort((a,b) => b-a)
    let answer = emergency.map(e=> arr.indexOf(e)+1)
    return answer
}