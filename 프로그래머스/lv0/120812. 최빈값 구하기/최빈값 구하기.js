function solution(array) {
    array.sort((a,b)=>a-b)
    const set = new Set(array)
    const newArray = [...set]
    if(newArray.length===1) return newArray[0]
    const frequency = newArray.map(v=>array.lastIndexOf(v)-array.indexOf(v)+1)
    if(frequency.filter(v=>v===Math.max(...frequency)).length >1) return -1
    return newArray[frequency.indexOf(Math.max(...frequency))]
}