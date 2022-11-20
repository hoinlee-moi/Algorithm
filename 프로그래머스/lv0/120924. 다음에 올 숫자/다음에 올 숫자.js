function solution(common) {
    let answer = 0;
        if(common[1]-common[0]===common[2]-common[1]) {
            return answer = common[common.length-1]+(common[1]-common[0])
        }
        else return answer = common[common.length-1]*(common[1]/common[0])
}