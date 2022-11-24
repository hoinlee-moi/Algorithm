function solution(N, stages) {
    let arr = [];
    for(let i=1; i<=N; i++) {
        let allPlayer = stages.filter(v=>v>=i).length
        let stagePlayer = stages.filter(v=>v===i).length
        if(allPlayer===0){
            arr.push(0)
            continue;
        }
        let failureRate = (stagePlayer/allPlayer)
        arr.push(failureRate)
    } 
    let stageFail = [...arr]
    stageFail.sort((a,b)=>b-a);
    console.log(arr,stageFail)
    const answer = stageFail.map((v,i)=>{
        let stage = 0
        if(arr.indexOf(v)===arr.lastIndexOf(v)) return arr.indexOf(v)+1
        stage = arr.indexOf(v)+1
        arr.splice(arr.indexOf(v),1," ")
        return stage
    })
    return answer
}