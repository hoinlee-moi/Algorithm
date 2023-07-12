function solution(priorities, location) {
    let cycle = 0;
    const processArray = priorities.map((v,i)=>[String.fromCharCode(i+65),v])
    const target = processArray[location]
    while(true){
        const execution = processArray.shift()
        const priority = processArray.filter(v=>v[1]>execution[1]).length
        if(priority) {
            processArray.push(execution)
            continue;
        }
        cycle = cycle+1
        if(execution[0]===target[0]) return cycle;
        
    }
}