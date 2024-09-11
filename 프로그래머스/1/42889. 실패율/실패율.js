function solution(N,stages) {
    const challenger = new Array(N + 2).fill(0);
    for(const stage of stages) {
        challenger[stage] += 1;
    }
    const fails = {};
    let total = stages.length;
    
    for(let i =1; i<=N; i++) {
        if(challenger[i] === 0) {
            fails[i] = 0;
            continue;
        }
        fails[i] = challenger[i] / total;
        total -= challenger[i]
    }
    const result = Object.entries(fails).sort((a,b)=>b[1] - a[1])
    
    return result.map((v)=> Number(v[0]))
}
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

/*
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
 하드코딩에 가깝게 햇는데 이사람의 풀이는
 reach 는 스테이지에 도달한 사람의 수 이고 curr은 도전중인 사람이다.
 그래서 result에 푸쉬 하는데 형태는 [스테이지, 실패율]로 들어가게 된다.
 그래서 실패율로 sort할 경우 자연스럽게 정렬된다.
 이후 map을 이용해서 스테이지 이름만 반환하도록 한다
*/