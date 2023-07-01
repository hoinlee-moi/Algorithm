function solution(progresses, speeds) {
    let answer = [];
    let success = progresses.map((v,i)=>{
        return Math.ceil((100-v)/speeds[i])+1
    })
    let compare = success[0]
    let dep = 1
    for(let i=1; i<=success.length-1;i++) {
        if(compare>=success[i]){
            dep++
        }else{
            compare = success[i]
            answer.push(dep)
            dep = 1
        }
    }
    answer.push(dep)
    return answer;
}