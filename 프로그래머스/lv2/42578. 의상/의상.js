function solution(clothes) {
    let answer =1;
    let clothe = {}
    clothes.forEach(v=>{
        clothe[v[1]] = clothe[v[1]]?clothe[v[1]]+1:1
    })
    let arr = Object.values(clothe)
    if(arr.length===1) return clothes.length
    let r = arr
    for(let i=0; i<arr.length; i++) {
        answer *= arr[i]+1
    }  
    return answer-1;
}