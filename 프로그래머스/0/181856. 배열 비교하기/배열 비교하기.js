function solution(arr1, arr2) {
    if(arr1.length!==arr2.length) return arr1.length>arr2.length?1:-1;
    const arr1sum = arr1.reduce((acc,cur)=>acc+cur);
    const arr2sum = arr2.reduce((acc,cur)=>acc+cur);
    return arr1sum===arr2sum?0:arr1sum>arr2sum?1:-1;
}