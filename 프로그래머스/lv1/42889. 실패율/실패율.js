// function solution(N, stages) {
//     let arr = [];
//     for(let i=1; i<=N; i++) {
//         let allPlayer = stages.filter(v=>v>=i).length
//         let stagePlayer = stages.filter(v=>v===i).length
//         if(allPlayer===0){
//             arr.push(0)
//             continue;
//         }
//         let failureRate = (stagePlayer/allPlayer)
//         arr.push(failureRate)
//     } 
//     let stageFail = [...arr]
//     stageFail.sort((a,b)=>b-a);
//     const answer = stageFail.map((v,i)=>{
//         let stage = 0
//         if(arr.indexOf(v)===arr.lastIndexOf(v)) return arr.indexOf(v)+1
//         stage = arr.indexOf(v)+1
//         arr.splice(arr.indexOf(v),1," ")
//         return stage
//     })
//     return answer
// }

function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}