function solution(array, n) {
    array.sort((a,b)=>a-b)
    const subArr = array.map(v=>Math.abs(n-v));
    const minIndex = subArr.indexOf(Math.min(...subArr))
    return array[minIndex];
}