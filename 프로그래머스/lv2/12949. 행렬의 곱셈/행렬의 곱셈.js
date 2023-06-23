function solution(arr1, arr2) {
    let answer=[]
    arr1.forEach((v,i)=>{
        let arr = []
        let cycle = 0;
        while(cycle<arr2[0].length) {
            let num = 0;
            for(let i=0; i<v.length;i++){
                num += v[i]*arr2[i][cycle]
            }
            arr.push(num)
            cycle++
        }
        answer.push(arr)
    })
    return answer;
}