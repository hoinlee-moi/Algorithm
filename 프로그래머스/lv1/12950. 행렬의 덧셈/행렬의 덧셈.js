function solution(arr1, arr2) {
    const answer = arr1.map((v,i)=>v.map((value,index)=>{
        return value+arr2[i][index]
    }))
    return answer;
}