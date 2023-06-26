function solution(s) {
    var answer = [];
    let arr = s.slice(2, -2).split("},{").map(v=>v.split(","))
    if(arr.length===1) return [parseInt(arr[0][0])]
    arr.sort((a,b)=>{
        return a.length-b.length
    })
    arr.map(v=>{
        if(v.length===1){ 
            answer.push(parseInt(v[0]))
            return;
        }
        let num = v.filter(val=>!answer.includes(parseInt(val)))
        answer.push(parseInt(num))
    })
    return answer;
}