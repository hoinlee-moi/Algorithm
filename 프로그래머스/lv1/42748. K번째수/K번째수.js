function solution(array, commands) {
    return commands.map(v=>{
    let newArr = [];
    for(let i=v[0]-1;i<=v[1]-1;i++) {
        newArr.push(array[i])
    }
    newArr.sort((a,b)=>a-b)
    return newArr[v[2]-1]
})
}