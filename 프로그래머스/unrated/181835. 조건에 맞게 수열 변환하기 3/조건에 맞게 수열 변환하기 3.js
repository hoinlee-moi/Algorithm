function solution(arr, k) {
    arr = arr.map(v=>{
        if(k%2===0) {
            return v+k
        }
        return v*k
    })
    return arr;
}