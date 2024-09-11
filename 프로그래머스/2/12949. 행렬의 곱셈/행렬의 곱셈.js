function solution(arr1, arr2) {
    const answer=[]
    arr1.forEach((v,i)=>{
    const arr = []
        arr2[0].forEach((_,y)=>{
            const num = v.reduce((acc,cur,idx)=>acc+(cur*arr2[idx][y]),0)
            arr.push(num)
        })
        answer.push(arr)  
    })
    return answer;
}

// function solution(arr1, arr2) {
//     return arr1.map((row) => arr2[0].map((_,y) => row.reduce((acc,cur,idx) => acc + cur * arr2[idx][y], 0)))
// }
